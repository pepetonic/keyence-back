const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//Crud Routes
router.post('/',authController.login);


module.exports = router;