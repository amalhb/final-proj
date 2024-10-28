const express = require("express");
const dishController = require("../Controller/dishController.js");

const router = express.Router();

// POST route to create a dish
router.post("/dishes", dishController.createDish);
// Route to get all dishes
router.get("/dishes", dishController.getAllDishes);
module.exports = router;
