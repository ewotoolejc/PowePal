require('dotenv').config();
require('./config/database');


const Trail= require('./models/trail')

const trails = [
  {name: 'Chute', difficulty: 'Black Diamond', description: 'Entrance: Right after departing Single Chair and follows the lift line', hazards: 'Moguls, possible Ice, possible tree branches, rocks, an occasional wallet from a lift rider', resort: '6466d24aac706579c2f1c19a', user: ['646685dccd0d80bbde4de960']}
];

let done = 0;

const seedData = async () => {
  try {
    await Trail.deleteMany({});

    for (let i = 0; i < trails.length; i++) {
      trails[i].save(function (err, result) {
        done++;
      });
    }
  } catch (err) {
    console.error(err);
  }
  console.log(done);
  console.log("Mock data is seeded from seed script.");
};

seedData()