import React from 'react'
import { useState, useEffect } from 'react';
import img1 from "../assets/img/food1.jpg";
import img2 from "../assets/img/food2.jpg";
import img3 from "../assets/img/food3.jpg";
import img4 from "../assets/img/food4.jpg";
import img5 from "../assets/img/food5.jpg";
import img6 from "../assets/img/food7.jpg";
import { DishesCard } from '../layouts/DishesCard';



export const Dishes = () => {

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/dishes')
      .then(response => response.json())
      .then(data => setDishes(data))
      .catch(error => console.error('Error fetching dishes:', error));
  }, []);

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
    <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
      Our Dishes
    </h1>

    <div className=" flex flex-wrap gap-8 justify-center">
      <DishesCard img={img1} title="Tasty Dish" price="799₹" />
      <DishesCard img={img2} title="Tasty Dish" price="699₹" />
      <DishesCard img={img3} title="Tasty Dish" price="599₹" />
      <DishesCard img={img4} title="Tasty Dish" price="499₹" />
      <DishesCard img={img5} title="Tasty Dish" price="399₹" />
      <DishesCard img={img6} title="Tasty Dish" price="299₹" />
      
    </div>
  </div>
  )
}
