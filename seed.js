require('dotenv').config();
require('./config/database');


const Resort = require('./models/resort')

(async function() {
  const resorts = await Resort.create([
      {name: 'Smugglers Notch', town: 'Stowe', state: 'VT', description: 'Placehold', user: ['646685dccd0d80bbde4de960']},
    ]);

  console.log(resorts);

  process.exit();

})();