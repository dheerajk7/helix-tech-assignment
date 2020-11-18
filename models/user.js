const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isTenant: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

if (!userSchema.options.toObject) userSchema.options.toObject = {};

//customizing user's object
userSchema.options.toObject.transform = function (doc, user, options) {
  delete user.password;
  delete user.createdAt;
  delete user.updatedAt;
  delete user.__v;
  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
