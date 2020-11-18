const express = require("express");
const router = express.Router();
const homeController = require("../../../controllers/api/v1/home_controller");

router.get("/", homeController.home);
// router.use("/property", require("./property"));

module.exports = router;