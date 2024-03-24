// const mongoose = require('mongoose');
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: false, // required가 false라면, 명시적으로 적지 않아도 됩니다.
  },
  password: {
    type: String,
    // required: false  , // 마찬가지로, required가 false라면, 이를 생략할 수 있습니다.
  },
});

const User = mongoose.model("User", userSchema);

export default User;
