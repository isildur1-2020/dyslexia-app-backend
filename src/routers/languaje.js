const { Router } = require("express");
const router = Router();
const {
  createLanguaje,
  getLanguajes,
  updateLanguaje,
} = require("../controllers/languaje");

router.get("/", getLanguajes);
router.post("/:languaje", createLanguaje);
router.put("/:languaje", updateLanguaje);

module.exports = router;
