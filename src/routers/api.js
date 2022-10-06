const express = require("express");
const router = express.Router();
const adminRouter = require("./admin");

router.use("/admin", adminRouter);

module.exports = router;
