const { Router } = require("express");
const router = Router();
const { sendEmail } = require("../controllers/email");

router.post("/", sendEmail);

module.exports = router;
