const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({ 
    name: String,
    price: Number,
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

module.exports = mongoose.model('Ticket', ticketSchema);