const Resort= require('../../models/resort');

module.exports = {
    index,
    home,
    createResort,
}

async function index(req, res) {
    const resorts = await Resort.find({}).exec();
    res.json(resorts);
}

async function home(req, res) {
    const home = await Resort.findById(req.params.id);
    res.json(home);
}

async function createResort(req, res) {
    try {
      req.body.user = req.user._id; 
      const resort = await Resort.create(req.body);
      res.json(resort)
    } catch (err) {
      res.status(400).json(err);
    }
  }