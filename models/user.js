const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: "Item"
        }
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;