const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
    email:      { type:String, require: true },
    password:   { type:String, require: true },
});

userSchema.methods.comparePassword = async function (password) {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (error) {
      throw new Error(error);
    }
  };

const User = mongoose.model('User', userSchema);

module.exports = User;