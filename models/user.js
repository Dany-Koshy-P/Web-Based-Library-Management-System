const mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  // Authentication fields
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },

  // Personal information
  firstName: {
    type: String,
    trim: false,
  },
  lastName: {
    type: String,
    trim: false,
  },
  username: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    default: "",
  },

  // Book issue information
  bookIssueInfo: [
    {
      book_info: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Issue",
        },
      },
    },
  ],

  // Other fields
  joined: {
    type: Date,
    default: Date.now,
  },
  violationFlag: {
    type: Boolean,
    default: false,
  },
  fines: {
    type: Number,
    default: 0,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
