import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  presence: {
    type: String,
    required: true,
  },
  attend: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: String,
  },
});

mongoose.models = {};

const User = mongoose.model("Comment", user);

export default User;
