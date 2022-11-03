const fs = require("fs");
const moment = require("moment");

const uploadVideo = (req, res) => {
  try {
    const { mimetype, path } = req.file;
    const extension = mimetype.split("/")?.[1];
    const filename = moment().format();
    let currentPath = path?.split("/");
    currentPath.pop();
    currentPath.push(filename);
    currentPath = currentPath.join("/");
    const newPath = `${currentPath}.${extension}`;
    fs.renameSync(path, newPath);
    res.status(200).json({
      err: null,
      URL: `/${filename}.${extension}`,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err,
      URL: null,
    });
  }
};

module.exports = { uploadVideo };
