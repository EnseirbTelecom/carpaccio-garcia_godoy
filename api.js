const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const port = 8800;
const app = express();
const id = {id: "it340-Garcia_Godoy"};

// Connection à la base de données
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true})
.then(() => console.log('Connected to MongoDB !'))
.catch(() => console.log('Connection to MongoDB failed !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Lecture des corps de requête en json 
app.use(bodyParser.json());

app.get('/id', function(req, res){
    res.json(id);
})

app.listen(port, ()=> {console.log('Server listening on port '+ port);});
