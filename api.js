const express = require('express')
const mongoose = require('mongoose')

id = {id: "it340-Garcia_Godoy"};
mongoose.connect('mongodb://localhost:27017/id', {useNewUrlParser: true});
let app = express();
let port = 8081;

app.get('/id', function(req, res){
    res.json(id);
})
 
app.listen(port, () =>  { 
    console.log('le serveur fonctionne')
})