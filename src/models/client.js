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
    grupo_id: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ClientScheme;
