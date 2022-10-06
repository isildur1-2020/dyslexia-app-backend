const { Router } = require("express");
const router = Router();
const { signinController } = require("../controllers/auth");

router.post("/signin", signinController);

module.exports = router;
