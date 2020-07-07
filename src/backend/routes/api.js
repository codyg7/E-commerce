const express = require("express");

const router = express.Router();

const ContactPost = require("../models/contactPost");

router.get("/", (req, res) => {
  ContactPost.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/save", (req, res) => {
  console.log("Body: ", req.body);
  const data = req.body;

  const newContactPost = new ContactPost(data);

  newContactPost.save((err) => {
    if (err) {
      res.status(500).json({ msg: "Sorry, internal server error" });
    } else {
      res.json({
        msg: "We recieved your data",
      });
    }
  });
});

router.get("/name", (req, res) => {
  const data = {
    username: "codyg7",
    age: "6",
  };
  res.json(data);
});

module.exports = router;
