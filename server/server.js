require('./config/config')

const express = require('express')
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//get
app.get('/usuario', function(req, res) {
    res.json('get usuario')
});

//post
app.post('/usuario', function(req, res) {

    let body = req.body;

    res.json({
        body
    })
});

//put
app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    res.json({
        id
    })
});

//delete
app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto ', 3000);
});