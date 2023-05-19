require('dotenv').config();
require('./config/database');

const Resort = require('./models/resort');


// IIFE
(async function() {

  await Resort.deleteMany({});
  const resorts = await Resort.create([
    {name: 'Mad River Glen', town: 'Fayston', state: 'VT', description: 'Mad River Glen is a ski area in Fayston, Vermont. Located within the Green Mountain range, it sits in the Mad River Valley. Though not considered a large ski area, it has a vertical drop of 2,000 feet (610 m), which ranks 14th in New England,[2] and its terrain was ranked by Ski magazine as the most challenging on the east coast of the United States', user: ['646685dccd0d80bbde4de960']},
    {name: 'Stowe Mountain Resort', town: 'Stowe', state: 'VT', description: 'Stowe Mountain Resort is a ski resort in the northeastern United States, near the town of Stowe in northern Vermont, comprising two separate mountains: Mount Mansfield and Spruce Peak. The lift-served vertical drop of Mount Mansfield is 2,360 feet (719 m), the fifth largest in New England and the fourth largest in Vermont.', user: ['646685dccd0d80bbde4de960']}, 
  ]);

  process.exit();

})();