var express = require('express');
var app = express();
// https://expressjs.com/es/guide/routing.html

// Get products from json file
const products = require('./products.json')

// products collection endpoint
app.get('/products', function (req, res) {
    // If the user sends a title filter, uses it
    if(req.query.title){
        // Get the query param for title
        const title = req.query.title
        // Filtered products
        let filteredProducts = products.filter(product => product.title.toLowerCase().includes(title.toLowerCase()))
        // Return just filtered products
        res.json(filteredProducts).send();
    } else{ // Return all product
         res.json(products).send();
    }
 })

// products item endpoint
app.get('/products/:id', function (req, res) {
    // Find one product by id
    product = products.find((product) => product.id === Number(req.params.id));
    // If product is found
    if(product)
        res.json(product).send();
    else // if product is not found
        res.status(404).send(); // 404 not found exception
 })

// starts server at port 8081
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})