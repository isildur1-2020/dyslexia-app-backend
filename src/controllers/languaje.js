const { Languaje } = require("../db/mongodb");
const languajes = require("../utils/languajes");

const getLanguajes = async (req, res) => {
  try {
    const languajesFound = await Languaje.find();
    const languajeOptions = languajesFound?.reduce((prev, curr) => {
      return {
        ...prev,
        [curr?.languaje]: curr,
      };
    }, {});
    const message = "Languajes found succesfully";
    res.status(200).json({
      message,
      err: false,
      languajeOptions,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      languajeOptions: null,
      message: err.message,
    });
  }
};

const deleteLanguajes = async (req, res) => {
  try {
    await Languaje.deleteMany();
    return res.status(200).json({
      err: false,
      message: "Languajes was deleted succesfully",
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

const createLanguajes = async (req, res) => {
  try {
    console.log("Deleting Languajes...");
    await Languaje.deleteMany();
    console.log("Languajes was deleted succesfully.");
    languajes.forEach(async (lang) => {
      try {
        let newLanguaje = new Languaje(lang);
        await newLanguaje.save();
      } catch (err) {
        console.log(err.message);
      }
    });
    const message = "Languajes created succesfully";
    console.log(message);
    return res.status(200).json({
      message,
      err: false,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

const updateLanguaje = async (req, res) => {
  const { languaje } = req.params;
  try {
    await Languaje.findOneAndUpdate({ languaje }, { ...req.body });
    const message = "Languaje updated succesfully";
    console.log(message);
    res.status(200).json({
      err: false,
      message,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = {
  getLanguajes,
  createLanguajes,
  updateLanguaje,
  deleteLanguajes,
};
