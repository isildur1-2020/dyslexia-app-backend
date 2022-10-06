const { Admin, Client } = require("../db/mongodb");

const createClient = async (req, res) => {
  try {
    const { username, password, group_id, tests } = req.body;
    const isExistsOnAdmin = await Admin.exists({ username });
    if (isExistsOnAdmin)
      return res.status(200).json({
        err: false,
        clientCreated: null,
        message: "Username already in use!",
      });
    const isExists = await Client.exists({ username });
    if (isExists)
      return res.status(200).json({
        err: false,
        clientCreated: null,
        message: "Username already in use!",
      });
    const newClient = new Client({ username, password, group_id, tests });
    const clientCreated = await newClient.save();
    const message = "Client created succesfully!";
    console.log(message);
    res.status(200).json({
      message,
      err: null,
      clientCreated,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      message: err,
      clientCreated: null,
    });
  }
};

const deleteClient = async (req, res) => {
  try {
    const { username } = req.body;
    const userDeleted = await Client.deleteOne({ username });
    const message = "Client deleted successfully!";
    console.log(message);
    res.status(200).json({
      err: null,
      message,
      userDeleted,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      message: err,
      userDeleted: null,
    });
  }
};

const findClientsByGroup = async (req, res) => {
  try {
    const { group_id } = req.params;
    const clientsFound = await Client.find({ group_id }).exec();
    const message = "Clients found successfully!";
    console.log(message);
    res.status(200).json({
      message,
      err: false,
      clientsFound,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      message: err,
      clientsFound: null,
    });
  }
};

const updateClientTests = async (req, res) => {
  try {
    const { tests } = req.body;
    const { username } = req.params;
    const clientUpdated = await Client.updateOne({ username }, { tests });
    const message = "Test updated successfully!";
    res.status(200).json({
      message,
      err: false,
      clientUpdated,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      message: err,
      clientUpdated: null,
    });
  }
};

module.exports = {
  createClient,
  deleteClient,
  updateClientTests,
  findClientsByGroup,
};
