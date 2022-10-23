const express = require("express");
const router = express.Router();
const adminRouter = require("./admin");
const clientRouter = require("./client");
const authRouter = require("./auth");
const languajeRouter = require("./languaje");
const audioRouter = require("./audioRouter");
const { isAdmin } = require("../middlewares/jwt");

router.use("/admin", adminRouter);
router.use("/client", isAdmin, clientRouter);
router.use("/languaje", languajeRouter);
router.use("/auth", authRouter);
router.use("/audio", audioRouter);

module.exports = router;
