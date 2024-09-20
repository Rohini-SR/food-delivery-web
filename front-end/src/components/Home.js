import React from 'react';
import { Button } from '../layouts/Button';
import '../index.css';

export const Home = () => {
  fetch('http://localhost:5000/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'John Doe',
      items: ['Dish 1', 'Dish 2'],
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-6xl">Welcome to "Tradition's Table"</h1>
        <p className="text-backgroundColor">Where tradition meets taste. Experience the flavors of our heritage in every bite.</p>
      </div>
      <div className="lg:pl-44">
        <Button title="Order Now" />
      </div>
    </div>
  );
};

