const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

let MONGOD_URI = process.env.MONGODB_URI || "mongodb://localhost/project-3";

mongoose.connect(MONGOD_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const itemSeed = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ly_uDzMk-t102NkgOd_tP_HVHVR_zeSZiB_k78Ab5PNSJm-VSg",
    name: "Chicken",
    details: "Fully grown chicken with great ersonaliy",
    postedBy: "Nelson",
    email: "nlson@nelson.com",
    lookingFor: "Goat, and or Llama"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUfs6HLyeyHzp3Gaq2oleMWZ5O4Q3tfdOhTRSDEU2VvCDeV7e",
    name: "Power Armor",
    details: "Partially charged",
    postedBy: "Derek",
    email: "nelson@nelson.com",
    lookingFor: "Rad-X, Radaway"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuosfdOh2iCR4Bp9k7LVXvtcvq2PfsBYm235w00bmRFrrkEJVBzw",
    name: "Shiny Ponyta",
    details: "Leveled up, and ready to rock.",
    postedBy: "Tucker",
    email: "nelson@nelson.com",
    lookingFor: "Magikarp"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGGKgCEGqzb4rgDMvZaV6sVpM1oe0l97Kmf5mnZLJoj1k3keO",
    name: "Gold-dipped Xbox",
    details: "Game console",
    postedBy: "Nelson",
    email: "nelson@nelson.com",
    lookingFor: "PS4"
  }
];

const userSeed = [
  {
    name: "Nelson",
    email: "nelson@nelson.com",
    items: []
  },
  {
    name: "Derek",
    email: "derek@derek.com",
    items: []
  },
  {
    name: "Tucker",
    email: "tucker@tucker.com",
    items: []
  },
  {
    name: "Pedro",
    email: "pedro@pedro.com",
    items: []
  },
  {
    name: "Tanner",
    email: "tanner@tanner.com",
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
