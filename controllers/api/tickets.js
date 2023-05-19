const Ticket= require('../../models/ticket');

module.exports = {
    tIndex,
    
}

async function tIndex(req, res) {
    const tickets = await Ticket.find({}).exec();
    res.json(tickets);
}
