const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // To allow cross-origin requests
app.use(bodyParser.json()); // To parse JSON data

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

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

