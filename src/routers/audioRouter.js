const { Router } = require("express");
const router = Router();
const { getAudios } = require("../controllers/audio");

router.get("/", getAudios);

module.exports = router;
