const { name } = require('ejs');
const mongoose = require('mongoose');

//Creating user model

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    age: {type: Number, required: true},

});

const User = new mongoose.model('User', SchemaUser);

//Controller function
const SchemaUser = async (firstName, email, password, age) => {
    try {
        const user = new userSchema({firstName, email, password, age});
        user.save();
        return user;
    } catch (error) {
        throw new Error(`Something went wrong creating a new user:`);
    }
}

module.exports = {User, createUser};