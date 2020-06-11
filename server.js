const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 5000;
const { v4: uuidv4 } = require('uuid');

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    console.log('hitting backend!')
    res.send(mockResturants);
});

var mockResturants = [
    {
        name: "Mcdonalds",
        id: uuidv4(),
        food: [{ itemName: "Fries", img: fs.readFileSync('./appImages/mcdonalds-fries.0.0.jpg', 'base64') }]
    },
    {
        name: "KFC",
        id: uuidv4(),
        food: [{ itemName: "Chicken", img: fs.readFileSync('./appImages/kfc-original-chicken-recipe.jpg', 'base64') }]
    }
]