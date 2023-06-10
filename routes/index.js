const express = require('express');
const router = express.Router();

//Routes files
const authRoutes = require('./auth');
const userRoutes = require('./users');
const userCatalogRoutes = require('./catalogUser');

router.use('/', userCatalogRoutes)
router.use('/auth', authRoutes);
router.use('/user', userRoutes);

module.exports = router;
