const { Schema } = require("mongoose");

const AdminScheme = new Schema(
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
    group_id: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = AdminScheme;
