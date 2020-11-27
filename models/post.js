const mongoose = require("mongoose");
//we might use this db schema if we have enough time to make users create questions in the front-end
const PostSchema = mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  correct_answer: {
    type: String,
    required: true
  },
  incorrect_answers: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("Posts", PostSchema);
