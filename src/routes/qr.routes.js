const router = require("express").Router();
const controller = require("../controllers/qr.controllers");

// Endpoint for "/api/qr/"
router.get("/", controller.getAllQR);

// Endpoint for "/api/qr/<id>"
router.get("/:id", controller.getSingleQR);

module.exports = router;
