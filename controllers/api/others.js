const Resort = require('../../models/resort');

module.exports = {
  createResort,
};

// function checkToken(req, res) {
//   console.log('req.user', req.user);
//   res.json(req.exp)
// }

// async function createResort(req, res) {
//   try {
//     // Add the user to the db
//     const resort = await Resort.create(req.body);
//     res.json(resort)
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }
