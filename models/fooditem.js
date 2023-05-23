const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fooditemSchema = new Schema({ 
    name: String,
    price: Number,
    restaurant: String,
    description: String,
    resort: {
        type: Schema.Types.ObjectId,
        ref: 'Resort',
        },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        }],
    }, {
    timestamps: true,  
});

module.exports = mongoose.model('FoodItem', fooditemSchema);