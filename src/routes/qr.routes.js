const router = require("express").Router();
const controller = require("../controllers/qr.controllers");

router.get("/", controller.getAllAssets);

module.exports = router;
