const mongoose = require("mongoose");
const ClientModel = require("../models/client");
const AdminModel = require("../models/admin");
const LanguajeModel = require("../models/languaje");

const mongodb = mongoose.createConnection(process.env.MONGODB_URI);

const Client = mongodb.model("Client", ClientModel, "client");
const Admin = mongodb.model("Admin", AdminModel, "admin");
const Languaje = mongodb.model("Languaje", LanguajeModel, "languaje");

module.exports = {
  Languaje,
  Client,
  Admin,
};
