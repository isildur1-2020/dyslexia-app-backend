const { Admin, Client } = require("../db/mongodb");

const createAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isExistsOnClient = await Client.exists({ username });
    if (isExistsOnClient)
      return res.status(200).json({
        err: false,
        adminCreated: null,
        message: "Username already in use!",
      });
    const isExists = await Admin.exists({ username });
    if (isExists)
      return res.status(200).json({
        err: false,
        adminCreated: null,
        message: "Username already in use!",
      });
    const newAdmin = new Admin({ username, password });
    const adminCreated = await newAdmin.save();
    const message = "Admin created succesfully!";
    console.log(message);
    res.status(200).json({
      err: null,
      message,
      adminCreated,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      message: err,
      adminCreated: null,
    });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const { username } = req.body;
    const userDeleted = await Admin.deleteOne({ username });
    const message = "Admin deleted successfully!";
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

const decreaseTests = async (req, res) => {
  try {
    const { username } = req.params;
    const userFound = await Client.findOne({ username });
    if (!userFound)
      return res.status(200).json({
        err: true,
        message: "User not found",
        userUpdated: null,
      });
    const currentTests = userFound?.tests;
    if (!currentTests)
      return res.status(200).json({
        err: true,
        message: "Test error",
        userUpdated: null,
      });
    const userUpdated = await Client.updateOne(
      { username },
      { tests: currentTests - 1 }
    );
    const message = "Test actualizados exitosamente";
    console.log(message);
    res.status(200).json({
      message,
      err: false,
      userUpdated,
    });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      err: true,
      message: "Test error",
      userUpdated: null,
    });
  }
};

module.exports = {
  createAdmin,
  deleteAdmin,
  decreaseTests,
};
