const mongoose = require('mongoose');
const Gold = mongoose.model('Coin');
const golds = require('../controllers/coins.js');
const path = require('path');

module.exports = function(app) {

    app.get('/coin', function(req, res) {
        golds.getAll(req, res)

    })
    app.post('/coin', function(req, res) {
        golds.add(req, res)
    })
    app.patch('/coin', function(req, res) {
        golds.update(req, res)
    })

    //any localhost8000/kfblhlhfskl will render index.html
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('./client/dist/index.html'))
    })
}