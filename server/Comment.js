const mongoose = require("mongoose");

const newComment = new mongoose.Schema({
  text: { type: String, required: true },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Upload",
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

let Comment = mongoose.model("Comment", newComment);
module.exports = Comment;
