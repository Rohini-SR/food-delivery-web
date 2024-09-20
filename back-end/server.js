const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors()); 
app.use(bodyParser.json());
app.use(express.json());

// In-memory data to store orders
let orders = [];

// Route to get all orders
app.get('/api/orders', (req, res) => {
  res.json({ orders });
});

// Route to place an order
app.post('/api/order', (req, res) => {
  const { name, items } = req.body;

  if (!name || !items || items.length === 0) {
    return res.status(400).json({ message: 'Invalid order data' });
  }

  const newOrder = {
    id: orders.length + 1,
    name,
    items,
    status: 'pending', // Default order status
  };

  orders.push(newOrder);
  res.status(201).json({ message: 'Order placed successfully', order: newOrder });
});

// Route to get a specific order by ID
app.get('/api/order/:id', (req, res) => {
  const orderId = parseInt(req.params.id, 10);
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  res.json({ order });
});

// In-memory array to store dishes data
const dishes = [
    { id: 1, img: 'path-to-img1', title: 'Tasty Dish 1', price: '799₹' },
    { id: 2, img: 'path-to-img2', title: 'Tasty Dish 2', price: '699₹' },
    { id: 3, img: 'path-to-img3', title: 'Tasty Dish 3', price: '599₹' },
    { id: 4, img: 'path-to-img4', title: 'Tasty Dish 4', price: '499₹' },
    { id: 5, img: 'path-to-img5', title: 'Tasty Dish 5', price: '399₹' },
    { id: 6, img: 'path-to-img6', title: 'Tasty Dish 6', price: '299₹' },
  ];
  
  // Route to get all dishes
  app.get('/api/dishes', (req, res) => {
    res.json(dishes);
  });

  // Simulating menu data
const menu = [
  { id: 1, img: '/img/food6.jpg', title: 'Delicious Dish', price: '150 ₹' },
  { id: 2, img: '/img/food9.jpg', title: 'Delicious Dish', price: '250 ₹' },
  { id: 3, img: '/img/food10.jpg', title: 'Delicious Dish', price: '100 ₹' }
];

// Routes
app.get('/api/menu', (req, res) => {
  res.json(menu);
});


// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

