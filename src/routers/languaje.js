const { Router } = require("express");
const router = Router();
const {
  createLanguajes,
  getLanguajes,
  updateLanguaje,
  deleteLanguajes,
} = require("../controllers/languaje");

router.get("/", getLanguajes);
router.post("/", createLanguajes);
router.put("/:languaje", updateLanguaje);
router.delete("/", deleteLanguajes);

module.exports = router;
