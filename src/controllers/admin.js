const { Admin } = require("../db/mongodb");

const createAdmin = async (req, res) => {
  try {
    // req.body -> { username: s, password: s, group_id: n }
    const newAdmin = new Admin(req.body);
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
    // req.body -> { username: s }
    const userDeleted = await Admin.deleteOne(req.body);
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

module.exports = {
  createAdmin,
  deleteAdmin,
};
