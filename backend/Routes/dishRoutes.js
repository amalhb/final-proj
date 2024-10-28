const express = require('express');
const dishController = require('../Controllers/dishController');

const router = express.Router();

// Route to get all dishes
router.get('/dishes', dishController.getAllDishes);

module.exports = router;
