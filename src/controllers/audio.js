const path = require("path");
const fs = require("fs");

const audiosOptions = () =>
  new Promise((resolve, reject) => {
    const audiosPath = path.join(process.cwd(), "src/public/audios");
    fs.readdir(audiosPath, (err, files) => {
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

module.exports = {
  getAudios,
};
