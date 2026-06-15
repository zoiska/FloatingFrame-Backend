const router = require("express").Router();
const controller = require("../controllers/computers.controllers");

// Endpoint for "/api/computers/"
router.get("/", controller.getAllComputers);

// Endpoint for "/api/computer/<id>"
router.get("/:id", controller.getSingleComputers);

module.exports = router;
