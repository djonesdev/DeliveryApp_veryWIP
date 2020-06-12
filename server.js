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

const mcdonaldsLogo = new Buffer(fs.readFileSync('appImages/mcdonalds-fries.0.0.jpg'), 'binary').toString('base64')
const kfcLogo = new Buffer(fs.readFileSync('appImages/kfc-original-chicken-recipe.jpg'), 'binary').toString('base64')

var mockResturants = [ 
    {
        name: "Mcdonalds",
        id: uuidv4(),
        image: mcdonaldsLogo,
        food: [
          {
            title: "Main dishes",
            data: [{ itemName: "Pizza", cost: 13, image: 'MOCK_IMG' }, { itemName: "Burger", cost: 13, image: 'MOCK_IMG' },{ itemName: "Nuggets", cost: 13, image: 'MOCK_IMG' }]
          },
          {
            title: "Sides",
            data: [{ itemName: "Fries", cost: 4, image: 'MOCK_IMG' }, { itemName: "Onion Rings", cost: 5, image: 'MOCK_IMG' }, { itemName: "Fruit", cost: 3, image: 'MOCK_IMG' }]
          },
          {
            title: "Drinks",
            data: [{ itemName: "Water", cost: 2, image: 'MOCK_IMG' }, { itemName: "Coke", cost: 2, image: 'MOCK_IMG' }, { itemName: "Beer", cost: 4, image: 'MOCK_IMG' }]
          },
          {
            title: "Desserts",
            data: [{ itemName: "Cheese Cake", cost: 5, image: 'MOCK_IMG' }, { itemName: "Ice Cream", cost: 5, image: 'MOCK_IMG' }]
          }
        ]
    },
    {
        name: "KFC",
        id: uuidv4(),
        image: kfcLogo,
        food: [
          {
            title: "Main dishes",
            data: [{ itemName: "Pizza", cost: 13, image: 'MOCK_IMG' }, { itemName: "Burger", cost: 13, image: 'MOCK_IMG' },{ itemName: "Nuggets", cost: 13, image: 'MOCK_IMG' }]
          },
          {
            title: "Sides",
            data: [{ itemName: "Fries", cost: 4, image: 'MOCK_IMG' }, { itemName: "Onion Rings", cost: 5, image: 'MOCK_IMG' }, { itemName: "Fruit", cost: 3, image: 'MOCK_IMG' }]
          },
          {
            title: "Drinks",
            data: [{ itemName: "Water", cost: 2, image: 'MOCK_IMG' }, { itemName: "Coke", cost: 2, image: 'MOCK_IMG' }, { itemName: "Beer", cost: 4, image: 'MOCK_IMG' }]
          },
          {
            title: "Desserts",
            data: [{ itemName: "Cheese Cake", cost: 5, image: 'MOCK_IMG' }, { itemName: "Ice Cream", cost: 5, image: 'MOCK_IMG' }]
          }
      ]
    }
]