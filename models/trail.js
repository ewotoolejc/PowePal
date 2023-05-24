const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailSchema = new Schema({ 
    name: String,
    difficulty: String,
    description: String,
    hazards: String,
    lat: Number,
    long: Number,
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

module.exports = mongoose.model('Trail', trailSchema);