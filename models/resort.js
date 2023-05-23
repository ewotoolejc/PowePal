const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resortSchema = new Schema({ 
    name: String,
    town: String,
    state: String,
    locationkey: Number,
    description: String,
    lat: Number,
    long: Number,
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        }],
    }, {
    timestamps: true,  
});

module.exports = mongoose.model('Resort', resortSchema);