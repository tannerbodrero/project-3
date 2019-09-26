const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

let MONGOD_URI = process.env.MONGODB_URI || "mongodb://localhost/project-3";

mongoose.connect(MONGOD_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const itemSeed = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ly_uDzMk-t102NkgOd_tP_HVHVR_zeSZiB_k78Ab5PNSJm-VSg",
    name: " A Chicken",
    details: "Fully grown fighting chicken with a really great personality. Answers to Tender.",
    postedBy: "Nelson Cadenas",
    email: "nelson@nelson.com",
    lookingFor: "A sweet goat, and or decent-grade Llama"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUfs6HLyeyHzp3Gaq2oleMWZ5O4Q3tfdOhTRSDEU2VvCDeV7e",
    name: "Prev. Gen Power Armor",
    details: "3% charge. Must meet in New Vegas.",
    postedBy: "Derek Miller",
    email: "Derekmlmt@gmail.com",
    lookingFor: "Radaway"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuosfdOh2iCR4Bp9k7LVXvtcvq2PfsBYm235w00bmRFrrkEJVBzw",
    name: "Shiny Ponyta",
    details: "Leveled up, and ready to rock.",
    postedBy: "Shuckersworth",
    email: "Shuckersworth@.com",
    lookingFor: "Magikarp"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGGKgCEGqzb4rgDMvZaV6sVpM1oe0l97Kmf5mnZLJoj1k3keO",
    name: "Gold-dipped Xbox",
    details: "Wet hands will turn green upon touching this device.",
    postedBy: "Nelson Cadenas",
    email: "nelson@nelson.com",
    lookingFor: "PS4"
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chicken_cartoon_04.svg/300px-Chicken_cartoon_04.svg.png",
    name: "Pedro's Chicken",
    details: "Short-fused battle clucker.",
    postedBy: "Pedro Murillo",
    email: "pedromurillo96@gmail.com",
    lookingFor: "High-quality Llama"
  },

  {
    img: "https://lh3.googleusercontent.com/proxy/tFKvtKycJVU5WAfUY8K3iWRf8GI-_74yVcN3WnBTuN6jb-jf4PfYnlwOZXvXsUE3fes1cS4U4ToOqXZMR8P-9y1s-tttikW6Zt7NXJ_Zh49N_5Jim-PGRMWnIsVY-GVt3NwKX_P5kSqshbjyl7g1A8Tkv5PULUOpmtgImCy7MnY7xjuYwak5sAPzfEcoJuV9jWgpjdY-8g00-z-U8aU4=s500-pd-e365-rw-pc0xffffff",
    name: "PlayStation",
    details: "Refurbished Five Times, And Works Great.",
    postedBy: "Tanner Bodrero",
    email: "tanner.bodrero@gmail.com",
    lookingFor: "Xbox"
  }
];

const userSeed = [
  {
    name: "Nelson Cadenas",
    email: "nelson@nelson.com",
    items: []
  },
  {
    name: "Derek Miller",
    email: "Derekmlmt@gmail.com",
    items: []
  },
  {
    name: "Shuckersworth",
    email: "Shuckersworth@.com.com",
    items: []
  },
  {
    name: "Pedro Murillo",
    email: "pedromurillo96@gmail.com",
    items: []
  },
  {
    name: "Tanner Bodrero",
    email: "tanner.bodrero@gmail.com",
    items: []
  }
];

function generateItems() {
  itemSeed.forEach(item => {
    db.Item.create(item)
      .then(item => {
        return db.User.findOneAndUpdate({ name: item.postedBy }, {
          $push: {
            items: item._id
          }
        }, { new: true });
      })
      .then(() => {
        console.log("information added");
      })
      .catch(err => {
        console.log(err)
      });
  });
}

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .then(generateItems)
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
