const mongoose = require('mongoose');

const Donor = mongoose.model('Donor');

module.exports = {
  async index(req, res) {
    const donors = await Donor.find();

    return res.render('index.html', { donors });
  },

  async store(req, res) {
    const { name, email, blood } = (req.body);
    const donors = await Donor.find();
    var error = [];
    const sucess = [];

    if (!name || typeof name == undefined || name == null){
      error.push({ err: 'Nome inválido. Por favor digite um nome válido.' })
    } 

    if (!blood || typeof blood == undefined || blood == null || blood.length < 3) {
      error.push({ err: 'Tipo sanguíneo inválido.' })
    }
    
    if (error.length > 0) {
      return res.render('index.html', {error: error, donors})

    } else {
      await Donor.create(req.body);
      sucess.push({ text: 'Cadastrado com sucesso em nosso bando de doadores!'})

      return res.render('index.html', {sucess: sucess, donors });
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