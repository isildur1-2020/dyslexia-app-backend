const multer = require("multer");
const { videosPath } = require("../paths");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, videosPath);
  },
});

const upload = multer({ storage });

module.exports = upload;
