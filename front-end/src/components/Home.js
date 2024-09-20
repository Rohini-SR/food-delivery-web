import React from 'react';
import { Button } from '../layouts/Button';
import '../index.css';

export const Home = () => {
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

