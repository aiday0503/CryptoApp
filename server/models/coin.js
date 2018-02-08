const mongoose = require('mongoose');

const CoinSchema = new mongoose.Schema({
    id: Number,
    name: String,
    value: Number,
    action: String
}, { timestamps: true })

mongoose.model('Coin', CoinSchema);


const Coin = mongoose.model('Coin', CoinSchema);