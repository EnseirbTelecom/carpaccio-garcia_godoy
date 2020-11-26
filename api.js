const express = require('express')

const bodyParser = require('body-parser');

const port = 8800;
const app = express();
const id = {id: "it340-Garcia_Godoy"};

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Lecture des corps de requête en json 
app.use(bodyParser.json());

app.get('/id', function(req, res){
    res.status(200).json(id);
})

app.post('/bill', function(req, res) {
    let prices = req.body.prices;
    let quantities = req.body.quantities;
    if( prices.length != quantities.length ){
        return res.status(400).json({error: "Prices and quantities don't have the same number of elements."})
    } else {
        const numberOfElements = prices.length;
        let result = 0;
        for(i=0;i<numberOfElements;i++){
            result = result + prices[i] * quantities[i];
        }
        if( result == 0 ){
            return res.status(400).json({ error: 'Failed to compute total' });
        } else {
            res.status(200).json({ total: result });
        }
    }
})

app.listen(port, ()=> {console.log('Server listening on port '+ port);});
