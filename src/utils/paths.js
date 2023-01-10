const path = require("path");

const videosPath = path.join(process.cwd(), "/src/public/videos");
const audiosPath = path.join(process.cwd(), "/src/public/audios");
const publicPath = path.join(process.cwd(), "/src/public");

module.exports = { videosPath, publicPath, audiosPath };
