const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

//Crud Routes
router.post('/register',UserController.registerUser);


module.exports = router;
