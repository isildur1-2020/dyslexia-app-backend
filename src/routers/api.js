const express = require("express");
const router = express.Router();
const adminRouter = require("./admin");
const clientRouter = require("./client");
const authRouter = require("./auth");
const { isAdmin } = require("../middlewares/jwt");

router.use("/admin", adminRouter);
router.use("/client", isAdmin, clientRouter);
router.use("/auth", authRouter);

module.exports = router;
