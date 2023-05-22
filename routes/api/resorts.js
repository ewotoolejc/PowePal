const express = require('express');
const router = express.Router();
const resortsCtrl = require('../../controllers/api/resorts');
const ticketsCtrl = require('../../controllers/api/tickets');
const trailsCtrl = require('../../controllers/api/trails');

// /api/resorts

router.get('/', resortsCtrl.index);
router.get('/:id', resortsCtrl.home);
router.get('/:id/tickets', ticketsCtrl.tIndex);
router.get('/:id/trails', trailsCtrl.trIndex);
router.get('/:id/trails/:tId', trailsCtrl.trail);


module.exports = router;