const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { registerValidation } = require("../validation");

router.post("/register", async (req, res) => {
  // Validating the data before makigna  user
  const { error } = registerValidation(req.body);
  // Parses error when doesnt hit requirement
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10); // Sets complexity of the hash
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // body parser
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    comment: req.body.comment,
    password: hashedPassword,
  });

  try {
    // Saves and posts users JSON information in postman
    const savedUser = await user.save();
    // only sends back user with the ID
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
