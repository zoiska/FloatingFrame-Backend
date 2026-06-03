const router = require("express").Router();
const controller = require("../controllers/assets.controllers");

// Endpoint for "/api/assets/"
router.get("/", controller.getAllAssets);

module.exports = router;
