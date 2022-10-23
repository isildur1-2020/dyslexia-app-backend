const { Router } = require("express");
const router = Router();
const {
  createLanguajes,
  getLanguajes,
  updateLanguaje,
} = require("../controllers/languaje");

router.get("/", getLanguajes);
router.post("/:languaje", createLanguajes);
router.put("/:languaje", updateLanguaje);

module.exports = router;
