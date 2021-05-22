var express = require('express');
var app = express();
// https://expressjs.com/es/guide/routing.html

const products = require('./products.json')

app.get('/products', function (req, res) {
    if(req.query.title){
         const title = req.query.title
         let filteredProducts = products.filter(product => product.title.toLowerCase().includes(title.toLowerCase()))
         res.json(filteredProducts).send();
    } else{
         res.json(products).send();
    }
 })

app.get('/products/:id', function (req, res) {
    product = products.find((product) => product.id === Number(req.params.id));
    if(product)
        res.json(product).send();
    else
        res.status(404).send();
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})