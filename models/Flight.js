const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    airport: { type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']},
    arrival: { type: Date}
});

const destination = mongoose.model('destination', destinationSchema);

const flightSchema = new mongoose.Schema({
    airline:  { type: String, enum:['American', 'Southwest', 'United']},
    flightNo:  { type: Number, min: 0, max:9999, required: true },
    departs: { type: Date, default: new Date().getFullYear() + 1},
    airport: { type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'], default: 'SAN'},
    destination: { type: [destinationSchema] }
});

const flight = mongoose.model('flight', flightSchema);

module.exports = flight, destination;