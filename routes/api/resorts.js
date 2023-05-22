const express = require('express');
const router = express.Router();
const resortsCtrl = require('../../controllers/api/resorts');
const ticketsCtrl = require('../../controllers/api/tickets')

// /api/resorts

router.get('/', resortsCtrl.index);
router.get('/:id', resortsCtrl.home);
router.get('/:id/tickets', ticketsCtrl.tIndex);


module.exports = router;