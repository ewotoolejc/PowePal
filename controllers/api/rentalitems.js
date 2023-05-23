const RentalItem = require('../../models/rentalitem');

module.exports = {
    rIndex,
}

async function rIndex(req, res) {
 const rentalitems = await RentalItem.find({}).exec();
    res.json(rentalitems);
}
