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

const createLanguaje = async (req, res) => {
  try {
    const { languaje } = req.params;
    // const isLanguajeExists = await Languaje.findOne({ languaje });
    // if (isLanguajeExists !== null) {
    //   const message = "Languaje is already exists";
    //   console.log(message);
    //   return res.status(200).json({
    //     message,
    //     err: true,
    //   });
    // }
    const {
      loginTitle,
      loginUser,
      loginPassword,
      loginNext,
      formName,
      formAge,
      formDateOfBirth,
      formNationality,
      formBloodType,
      formFemale,
      formMale,
      timeTitle,
      timeMinutesLabel,
      recordPopupLabel,
      recordPopupCancelLabel,
      recordPopupStartLabel,
      firstQuestionTitle,
      firstQuestionSubtitle,
      secondQuestionTitle,
      secondQuestionOption1,
      secondQuestionOption2,
      secondQuestionOption3,
      secondQuestionOption4,
      thirdQuestionTitle,
      thirdQuestionSubtitle,
      fourthQuestionTitle,
      fourthQuestionOption1,
      fourthQuestionOption2,
      fourthQuestionOption3,
      fourthQuestionOption4,
      fifthQuestionTitle,
      fifthQuestionSubtitle,
      sixthQuestionTitle,
      sixthQuestionText,
      seventhQuestionTitle,
      seventhQuestionText,
    } = languajes?.[0];
    const newLanguaje = await Languaje.create({
      languaje,
      loginTitle,
      loginUser,
      loginPassword,
      loginNext,
      formName,
      formAge,
      formDateOfBirth,
      formNationality,
      formBloodType,
      formFemale,
      formMale,
      timeTitle,
      timeMinutesLabel,
      recordPopupLabel,
      recordPopupCancelLabel,
      recordPopupStartLabel,
      firstQuestionTitle,
      firstQuestionSubtitle,
      secondQuestionTitle,
      secondQuestionOption1,
      secondQuestionOption2,
      secondQuestionOption3,
      secondQuestionOption4,
      thirdQuestionTitle,
      thirdQuestionSubtitle,
      fourthQuestionTitle,
      fourthQuestionOption1,
      fourthQuestionOption2,
      fourthQuestionOption3,
      fourthQuestionOption4,
      fifthQuestionTitle,
      fifthQuestionSubtitle,
      sixthQuestionTitle,
      sixthQuestionText,
      seventhQuestionTitle,
      seventhQuestionText,
    });
    await newLanguaje.save();
    const message = "Languaje created succesfully";
    console.log(message);
    res.status(200).json({
      err: false,
      message,
      newLanguaje: languaje,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      languaje: null,
      message: err.message,
    });
  }
};

const updateLanguaje = async (req, res) => {
  const { languaje } = req.params;
  try {
    const {
      loginTitle,
      loginUser,
      loginPassword,
      loginNext,
      timeTitle,
      timeMinutesLabel,
      recordPopupLabel,
      recordPopupCancelLabel,
      recordPopupStartLabel,
      firstQuestionTitle,
      firstQuestionSubtitle,
      secondQuestionTitle,
      secondQuestionOption1,
      secondQuestionOption2,
      secondQuestionOption3,
      secondQuestionOption4,
      thirdQuestionTitle,
      thirdQuestionSubtitle,
      fourthQuestionTitle,
      fourthQuestionOption1,
      fourthQuestionOption2,
      fourthQuestionOption3,
      fourthQuestionOption4,
      fifthQuestionTitle,
      fifthQuestionSubtitle,
      sixthQuestionTitle,
      sixthQuestionText,
      seventhQuestionTitle,
      seventhQuestionText,
    } = req.body;
    const newLanguaje = await Languaje.findOneAndUpdate(
      { languaje },
      {
        loginTitle,
        loginUser,
        loginPassword,
        loginNext,
        timeTitle,
        timeMinutesLabel,
        recordPopupLabel,
        recordPopupCancelLabel,
        recordPopupStartLabel,
        firstQuestionTitle,
        firstQuestionSubtitle,
        secondQuestionTitle,
        secondQuestionOption1,
        secondQuestionOption2,
        secondQuestionOption3,
        secondQuestionOption4,
        thirdQuestionTitle,
        thirdQuestionSubtitle,
        fourthQuestionTitle,
        fourthQuestionOption1,
        fourthQuestionOption2,
        fourthQuestionOption3,
        fourthQuestionOption4,
        fifthQuestionTitle,
        fifthQuestionSubtitle,
        sixthQuestionTitle,
        sixthQuestionText,
        seventhQuestionTitle,
        seventhQuestionText,
      }
    );
    const message = "Languaje updated succesfully";
    console.log(message);
    res.status(200).json({
      err: false,
      newLanguaje,
      message,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      newLanguaje: null,
      message: err.message,
    });
  }
};

module.exports = {
  getLanguajes,
  createLanguaje,
  updateLanguaje,
};
