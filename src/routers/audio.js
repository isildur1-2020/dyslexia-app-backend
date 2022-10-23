const path = require("path");
const { Router } = require("express");
const router = Router();
const { getAudios, uploadAudio } = require("../controllers/audio");

const multer = require("multer");
const audiosPath = path.join(process.cwd(), "/src/public/audios");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, audiosPath);
  },
});
const upload = multer({ storage });

router.get("/", getAudios);
router.post("/", upload.single("audio"), uploadAudio);

module.exports = router;
