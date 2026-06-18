const router = require("express").Router();
const controller = require("../controllers/assets.controllers");

// Endpoint for "/api/assets/"
router.get("/", controller.getAllAssets);

// Endpoint for "/api/assets/:id"
router.get("/:id", controller.getAssetsByQR);

module.exports = router;
