const path = require("path");

const videosPath = path.join(process.cwd(), "/src/public/videos");
const publicPath = path.join(process.cwd(), "/src/public");

module.exports = { videosPath, publicPath };
