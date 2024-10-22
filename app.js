var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    console.log("GET request received at '/'"); // Debugging statement
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', function(req, res) {
    console.log("POST request received at '/'"); // Debugging statement

    var productID = req.body.ProductID;
    var productName = req.body.ProductName;
    var Rating1 = parseFloat(req.body.Rating1);
    var Rating2 = parseFloat(req.body.Rating2);
    var Rating3 = parseFloat(req.body.Rating3);
    var mean = (Rating1 + Rating2 + Rating3) / 3;

    if (mean < 20) {
        res.send("Product ID: " + productID + "<br> Product Name: " + productName + "<br> Rating Rank: Low Quality");
    } else if (mean > 30 && mean <= 40) {
        res.send("Product ID: " + productID + "<br> Product Name: " + productName + "<br> Rating Rank: Medium Quality");
    } else if (mean > 40) {
        res.send("Product ID: " + productID + "<br> Product Name: " + productName + "<br> Rating Rank: High Quality");
    }
});

app.listen(8080, function() {
    console.log("Server is running on http://localhost:8080");
});
