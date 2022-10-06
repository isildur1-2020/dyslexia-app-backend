const express = require("express");
const router = express.Router();
const adminRouter = require("./admin");
const clientRouter = require("./client");
const authRouter = require("./auth");

router.use("/admin", adminRouter);
router.use("/client", clientRouter);
router.use("/auth", authRouter);

module.exports = router;
