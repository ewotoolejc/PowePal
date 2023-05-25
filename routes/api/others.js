const express = require('express');
const router = express.Router();
const othersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/others'

// router.post('/addresorts', othersCtrl.createResort);

// GET /api/users/check-token
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// POST /api/users/login
// router.post('/login', usersCtrl.login);

module.exports = router;