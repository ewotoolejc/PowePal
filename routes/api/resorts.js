const express = require('express');
const router = express.Router();
const resortsCtrl = require('../../controllers/api/resorts');
const ticketsCtrl = require('../../controllers/api/tickets');
const trailsCtrl = require('../../controllers/api/trails');
const fooditemsCtrl = require('../../controllers/api/fooditems');
const rentalitemsCtrl = require('../../controllers/api/rentalitems');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// /api/resorts

router.get('/', resortsCtrl.index);
router.get('/:id', resortsCtrl.home);
router.get('/:id/tickets', ticketsCtrl.tIndex);
router.get('/:id/trails', trailsCtrl.trIndex);
router.get('/:id/trails/:tId', trailsCtrl.trail);
router.get('/:id/condtions');
router.get('/:id/dining/', fooditemsCtrl.fIndex);
router.get('/:id/rentals/', rentalitemsCtrl.rIndex);

router.post('/addresorts', ensureLoggedIn, resortsCtrl.createResort)

module.exports = router;