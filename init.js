const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection Build");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process if there's an error connecting to MongoDB
  });

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mangocrude");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err; // Rethrow the error to be caught by the outer catch block
  }
}

Chat.insertMany([
  { from: "UserA", to: "UserB", msg: "Hey there!" },
  { from: "UserB", to: "UserA", msg: "Hello! How are you?" },
  { from: "UserC", to: "UserA", msg: "Hi! I have a question." },
  { from: "UserA", to: "UserC", msg: "Sure, ask away!" },
  { from: "UserD", to: "UserB", msg: "Greetings!" },
  { from: "UserB", to: "UserD", msg: "Hello! Nice to meet you." },
  { from: "UserC", to: "UserD", msg: "What are you working on?" },
  {
    from: "UserD",
    to: "UserC",
    msg: "Im working on a project. How about you?",
  },
  { from: "UserA", to: "UserD", msg: "Just chilling! What about you?" },
  { from: "UserD", to: "UserA", msg: "Same here. Enjoying the day." },
]);
