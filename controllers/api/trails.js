const Trail= require('../../models/trail');

module.exports = {
    trIndex,
    trail, 
}

async function trIndex(req, res) {
    const trails = await Trail.find({}).exec();
    res.json(trails);
}

async function trail(req, res) {
    const trail = await Trail.findById(req.params.id);
    console.log(trail);
    res.json(trail);
}