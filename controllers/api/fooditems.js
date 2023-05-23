const FoodItem = require('../../models/fooditem');

module.exports = {
    fIndex,
}

async function fIndex(req, res) {
    const fooditems = await FoodItem.find({}).exec();
    res.json(fooditems);
}
