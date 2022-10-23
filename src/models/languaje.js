const { Schema } = require("mongoose");

const LanguajeScheme = new Schema(
  {
    languaje: {
      type: String,
      unique: true,
      required: true,
    },
    loginTitle: {
      type: String,
      required: true,
    },
    loginUser: {
      type: String,
      required: true,
    },
    loginPassword: {
      type: String,
      required: true,
    },
    loginNext: {
      type: String,
      required: true,
    },
    // ========================
    formName: {
      type: String,
      required: true,
    },
    formAge: {
      type: String,
      required: true,
    },
    formDateOfBirth: {
      type: String,
      required: true,
    },
    formNationality: {
      type: String,
      required: true,
    },
    formBloodType: {
      type: String,
      required: true,
    },
    formFemale: {
      type: String,
      required: true,
    },
    formMale: {
      type: String,
      required: true,
    },
    // ========================
    timeTitle: {
      type: String,
      required: true,
    },
    timeMinutesLabel: {
      type: String,
      required: true,
    },
    // ========================
    recordPopupLabel: {
      type: String,
      required: true,
    },
    recordPopupCancelLabel: {
      type: String,
      required: true,
    },
    recordPopupStartLabel: {
      type: String,
      required: true,
    },
    // ========================
    firstQuestionTitle: {
      type: String,
      required: true,
    },
    firstQuestionSubtitle: {
      type: String,
      required: true,
    },
    // ========================
    secondQuestionTitle: {
      type: String,
      required: true,
    },
    secondQuestionOption1: {
      type: String,
      required: true,
    },
    secondQuestionOption2: {
      type: String,
      required: true,
    },
    secondQuestionOption3: {
      type: String,
      required: true,
    },
    secondQuestionOption4: {
      type: String,
      required: true,
    },
    // ========================
    thirdQuestionTitle: {
      type: String,
      required: true,
    },
    thirdQuestionSubtitle: {
      type: String,
      required: true,
    },
    // ========================
    fourthQuestionTitle: {
      type: String,
      required: true,
    },
    fourthQuestionOption1: {
      type: String,
      required: true,
    },
    fourthQuestionOption2: {
      type: String,
      required: true,
    },
    fourthQuestionOption3: {
      type: String,
      required: true,
    },
    fourthQuestionOption4: {
      type: String,
      required: true,
    },
    // ========================
    fifthQuestionTitle: {
      type: String,
      required: true,
    },
    fifthQuestionSubtitle: {
      type: String,
      required: true,
    },
    // ========================
    sixthQuestionTitle: {
      type: String,
      required: true,
    },
    sixthQuestionText: {
      type: String,
      required: true,
    },
    // ========================
    seventhQuestionTitle: {
      type: String,
      required: true,
    },
    seventhQuestionText: {
      type: String,
      required: true,
    },
    // ========================
    audioFirstQuestion: {
      type: String,
      required: true,
    },
    audioSecondQuestion: {
      type: String,
      required: true,
    },
    audioThridQuestion: {
      type: String,
      required: true,
    },
    audioFourthQuestion: {
      type: String,
      required: true,
    },
    audioFifthQuestion: {
      type: String,
      required: true,
    },
    audioSixthQuestion: {
      type: String,
      required: true,
    },
    audioSeventhQuestion: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = LanguajeScheme;
