// mongodb://username:password@host:port/database?options...
const mongoose = require("mongoose");
const ClientModel = require("../models/client");
const AdminModel = require("../models/admin");

const mongodb = mongoose.createConnection(process.env.MONGODB_URI);

const Client = mongodb.model("Client", ClientModel, "client");
const Admin = mongodb.model("Admin", AdminModel, "admin");

module.exports = {
  mongodb,
  Client,
  Admin,
};
