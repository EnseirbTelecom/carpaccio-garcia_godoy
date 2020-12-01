const express = require('express')

const bodyParser = require('body-parser');

const Bill = require("./bill.js");

const port = 8800;
const app = express();
const id = { id: "it340-Garcia_Godoy" };

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Lecture des corps de requête en json 
app.use(bodyParser.json());

app.get('/id', function (req, res) {
    res.status(200).json(id);
})

app.post('/bill', function (req, res) {
    let total;
    try {
        total = Bill.calcBill(req.body.prices, req.body.quantities);
    }
    catch (error) {
        console.error(error);
        res.status(401).json(error)
    }
    res.status(200).json({bill: total});

})

app.listen(port, () => { console.log('Server listening on port ' + port); });
