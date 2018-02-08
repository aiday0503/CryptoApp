const mongoose = require('mongoose');
const Gold = mongoose.model('Coin');

module.exports = {

    getAll: function(req, res) {
        Coin.find({}, function(err, data) {
            if (data) {
                res.json({ message: "Success", data: data })
            } else if (err) {
                console.log(err);
                res.json({ message: "error", err: err });
            }
        })
    },
    add: function(req, res) {
        Coin.create({ total: req.body.gold, log: req.body.logs }, function(err, data) {
            if (data) {
                res.json({ message: "Success", data: data })
            } else if (err) {
                console.log(err);
                res.json({ message: "error", err: err });
            }
        })
    },
}