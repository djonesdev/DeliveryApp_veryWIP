const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 5000;
const { v4: uuidv4 } = require('uuid');

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
    res.send(mockResturants);
});

app.post('/express_backend', (req, res) => {
  res.send(mockResturants);
});

var mockResturants = [ 
    {
        name: "Mcdonalds",
        id: uuidv4(),
        food: [{
            title: "Main dishes",
            data: ["Pizza", "Burger", "Risotto"]
          },
          {
            title: "Sides",
            data: ["French Fries", "Onion Rings", "Fried Shrimps"]
          },
          {
            title: "Drinks",
            data: ["Water", "Coke", "Beer"]
          },
          {
            title: "Desserts",
            data: ["Cheese Cake", "Ice Cream"]
          }]
    },
    {
        name: "KFC",
        id: uuidv4(),
        food: [{
            title: "Main dishes",
            data: ["Pizza", "Burger", "Risotto"]
          },
          {
            title: "Sides",
            data: ["French Fries", "Onion Rings", "Fried Shrimps"]
          },
          {
            title: "Drinks",
            data: ["Water", "Coke", "Beer"]
          },
          {
            title: "Desserts",
            data: ["Cheese Cake", "Ice Cream"]
          }]
    }
]