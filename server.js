require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');

const app = express();
const port = 3000 

const flight = require('./models/Flight.js');
const destination = require('./models/Flight.js');

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.get('/', function(req, res){
    res.send(`<h1><a href='/flight'>Welcome to the flight App!</a></h1>`);
});   

app.get('/flight', (req, res)=>{
    flight.find({}, (error, allFlight)=>{
        res.render('Index', {
            flight : allFlight
        });
    });
});

app.get('/flight/new', (req, res)=>{
    res.render('New');
});

app.post('/flight/', (req, res)=>{
    flight.create(req.body, (error, createdFlight)=>{
        res.redirect('/flight');
    });
});

app.get('/flight/:id', (req, res)=>{
    flight.findById(req.params.id, (err, foundFlight)=>{
        res.render('Show', {
            flight:foundFlight
        });
    });
});

app.post('/flight/:id', (req, res)=>{
    destination.create(req.body, (error, createdDestination)=>{
            res.redirect(`/flight/${req.params.id}`);
    });
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
});