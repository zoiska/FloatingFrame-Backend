const router = require("express").Router();
const controller = require("../controllers/computers.controllers");

// Endpoints for /api/computer/...
router.get("/", controller.getAllComputers); // Get all computer
router.get("/:id", controller.getComputers); // Get computer by id
router.post("/", controller.createComputers); // Create computer
router.patch("/:id", controller.updateComputers); // Update computer by id
router.delete("/:id", controller.deleteComputers); // Delete computer by id

module.exports = router;
