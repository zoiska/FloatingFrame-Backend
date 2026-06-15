const router = require("express").Router();
const controller = require("../controllers/switches.controllers");

// Endpoint for "/api/switch"
router.get("/", controller.getAllSwitches);

// Endpoint for "/api/switch/<id>"
router.get("/:id", controller.getSingleSwitches);

module.exports = router;
