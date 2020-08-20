const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// Scheme for user 
const UserSchema = new Schema({
    accountType: String,
    email: String,
    password: String,
    createdAt: Date,
    dateOfBirth: Date,
    genres: [String],
    instruments: [String],
    location: String,
    description: String,
    professionalAccount: String,
    name: String,
    tavernType: String
});

// Password hashing
UserSchema.pre('save', async function(next) {
   const user = this;
   if (!user.isModified('password')) return next();

   const hash = await bcrypt.hash(user.password, 10);
   user.password = hash;
   next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;