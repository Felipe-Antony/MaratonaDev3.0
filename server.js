const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const server = express();
const nunjucks = require('nunjucks');

server.use(cors());
server.use(express.json());
server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://felipe-omnistack:guitardr1@cluster0-sddfh.gcp.mongodb.net/doe?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

nunjucks.configure('./', {
  express: server,
  noCache: true,
});

requireDir('./models/');
server.use('/', require('./routes'));

server.listen(3000, function() {
  console.log('start server!')
});