const { Schema } = require("mongoose");

const ClientScheme = new Schema(
  {
    username: {
      unique: true,
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    tests: {
      type: Number,
      required: true,
    },
    group_id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ClientScheme;
