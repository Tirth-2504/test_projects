const { name } = require('ejs');
const mongoose = require('mongoose');

//Creating user modelu
const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    age: {type: Number, required: true},

});

const User = new mongoose.model('User', UserSchema);

//Controller function
const createUser = async (firstName, email, password, age) => {
    try {
        const user = new User({firstName, email, password, age});
        user.save();
        return user;
    } catch (error) {
        throw new Error(`Something went wrong creating a new user:`);
    }
}

module.exports = {User, createUser};