const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req.body);
  res.send("user router");

  const User = require("../../model/User");

  let name = "b";
  let email = "b";
  let passworf = "b";

  let user = new User({
    name,
    email,
    passworf,
  });

  let user2 = await User.findOne({ name: "a" });

  // await user.save();

  console.log(user2);
});

module.exports = router;
