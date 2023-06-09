const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resortSchema = new Schema({ 
    name: String,
    town: String,
    state: String,
    description: String,
    lat: Number,
    long: Number,
    logourl: String,
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        }],
    }, {
    timestamps: true,  
});

module.exports = mongoose.model('Resort', resortSchema);