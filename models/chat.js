const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  // Your schema fields go here
  from: {
    type: String,
    require: true,
  },
  to: {
    type: String,
    require: true,
  },
  msg: {
    type: String,
    maxLength: 100,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
