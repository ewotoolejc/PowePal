const Resort= require('../../models/resort');

module.exports = {
    index,
    home,
}

async function index(req, res) {
    const resorts = await Resort.find({}).exec();
    res.json(resorts);
}

async function home(req, res) {
    const home = await Resort.findById(req.params.id);
    res.json(home);
}

