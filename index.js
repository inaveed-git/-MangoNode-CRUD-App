const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const Chat = require("./models/chat.js");
var methodOverride = require("method-override");
const { toUSVString } = require("util");

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
// Use express.urlencoded middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
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

app.get("/", (req, res) => {
  res.send("This is connected");
});

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("chats.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("newChat.ejs");
});

app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;

  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
  });

  newChat
    .save()
    .then((res) => {
      console.log("Chat saved");
    })
    .catch((err) => {
      console.log(err);
    });

  res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;

  let chatid = await Chat.findById(id);
  res.render("editchat.ejs", { chatid });
});

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newmsg, to: newto, from: newfrom } = req.body;

  let updatechat = await Chat.findByIdAndUpdate(
    id,
    { from: newfrom, to: newto, msg: newmsg },
    { runValidators: true, new: true }
  );

  console.log(updatechat);
  res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletechat = await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
