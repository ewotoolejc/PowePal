require('dotenv').config();
require('./config/database');


const Ticket = require('./models/ticket')

// IIFE
(async function() {

  await Ticket.deleteMany({});
  const tickets = await Ticket.create([
    {name: 'Adult Ticket', price: 80, resort: '6466d24aac706579c2f1c19a', user: ['646685dccd0d80bbde4de960']},
    {name: 'Child Ticket', price: 50, resort: '6466d24aac706579c2f1c19a', user: ['646685dccd0d80bbde4de960']},
    {name: 'Adult Ticket', price: 100, resort: '6466d24aac706579c2f1c19b', user: ['646685dccd0d80bbde4de960']},
    {name: 'Child Ticket', price: 75, resort: '6466d24aac706579c2f1c19b', user: ['646685dccd0d80bbde4de960']},
  ]);

  process.exit();

})();