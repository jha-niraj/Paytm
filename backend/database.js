// backend/database.js
const mongoose = require("mongoose");
const { Schema } = require("zod");

mongoose.connect("mongodb+srv://jhaniraj45:ayV4Q8T5wMqyIXvp@paytm-fullstack.ly1ghwt.mongodb.net/user");

// Elegant Solution:
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 40
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 40
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        minLength: 5,
        maxLength: 40
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxLength: 40
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
    User,
    Account
}

// Simple Solution:
// const userSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     username: String,
//     password: String
// })