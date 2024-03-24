const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req.body);
  res.send("user router");

  const User = require("../../model/User");

  let name = "a";
  let email = "a";
  let passworf = "a";

  let user = new User({
    name,
    email,
    passworf,
  });

  await user.save();

  console.log(user.name);
});

module.exports = router;
