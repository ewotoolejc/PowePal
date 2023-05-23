const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalitemSchema = new Schema({ 
    name: String,
    price: Number,
    brand: String,
    imageurl: String,
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

module.exports = mongoose.model('RentalItem', rentalitemSchema);