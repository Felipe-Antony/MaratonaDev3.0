const mongoose = require('mongoose');

const Donor = mongoose.model('Donor');

module.exports = {
  async index(req, res) {
    const donors = await Donor.find();

    return res.render('index.html', { donors });
  },

  async store(req, res) {
    const donors = await Donor.create(req.body);

    try {
      return res.redirect('/');
    
    } catch (error) {
      return alert('Todos os campos são obrigatórios.')
    }
  },

  async update(req, res) {
    const donors = await Donor.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(donors);
  },

  async destroy(req, res) {
    await Donor.findByIdAndRemove(req.params.id);

    return res.send();
  }
}