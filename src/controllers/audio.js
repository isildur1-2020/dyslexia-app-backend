const fs = require("fs");
const { audiosPath } = require("../utils/paths");

const audiosOptions = () =>
  new Promise((resolve, reject) => {
    fs.readdir(audiosPath, (err, files) => {
      console.log(audiosPath);
      if (err) reject(err);
      resolve(files);
    });
  });

const getAudios = async (req, res) => {
  try {
    const files = await audiosOptions();
    res.status(200).json({
      files,
      err: false,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      files: null,
    });
  }
};

const uploadAudio = (req, res) => {
  try {
    const { path, originalname } = req.file;
    let newPath = path.split("/");
    newPath.pop();
    newPath.push(originalname);
    newPath = newPath.join("/");
    fs.renameSync(path, newPath);
    res.status(200).json({
      err: null,
      URL: originalname,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err,
      URL: null,
    });
  }
};

module.exports = {
  getAudios,
  uploadAudio,
};
