const mongoose = require("mongoose");
const { Schema } = mongoose;
const BlogSchema = require('./blog');

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("users", userSchema);
