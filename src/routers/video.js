const { Router } = require("express");
const router = Router();
const { uploadVideo } = require("../controllers/video");
const multer = require("../utils/multer/video");

router.post("/", multer.single("record"), uploadVideo);

module.exports = router;
