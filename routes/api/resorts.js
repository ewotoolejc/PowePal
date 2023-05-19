const express = require('express');
const router = express.Router();
const resortsCtrl = require('../../controllers/api/resorts');

// /api/resorts

router.get('/', resortsCtrl.index);
router.get('/:id', resortsCtrl.home)

module.exports = router;