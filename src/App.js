import './App.css';
import React from 'react'
import { useState } from "react"
import baliq from "./img/fish.jpg"
import mal from "./img/meat.jpg"
import sirni from "./img/keks.jpg"
import toyuq from "./img/food.jpg"
import { FaFish } from 'react-icons/fa';
import { GiMeat } from 'react-icons/gi';
import { GiCakeSlice } from 'react-icons/gi';
import { GiMeal } from 'react-icons/gi';
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import { BsCheckLg } from 'react-icons/bs';
function App() {
  let fish = { name: "Garlic Butter Fish", img: baliq }
  let meat = { name: "Minute Egg on Creamy Polenta with Crispy", img: mal }
  let keks = { name: "Crab Appetizer Dish", img: sirni }
  let yemek = { name: "Brooke's Best Bombshell Brownies", img: toyuq }
  const [user, setUser] = useState(fish)
  return (
    <div className="App">
        <div className='contact'>
      <div className='btn'>
        <button className='button' onClick={() => setUser(fish)}> Fish  <FaFish /></button>
        <button className='button' onClick={() => setUser(meat)}> Meat <GiMeat /></button>
        <button className='button' onClick={() => setUser(keks)}>Keks <GiCakeSlice /></button>
        <button className='button' onClick={() => setUser(yemek)}>Meals <GiMeal /></button>
      </div>
      <div className='menu'>
        <div className='menu1'>
          <div>
            <div className='name'>
              <h2>{user.name}</h2>
            </div>
            <div className='antd'>
              <Rate defaultValue={3} /> <span className='by'>Recipe by: James Smith</span>
            </div>
            <div className='text'>
              <h1>Ingredients</h1>
              <d  iv className='text1'>
                <div>
                  <p> < BsCheckLg className='icon' />1 tsp. granulated sugar</p>
                  <p> <BsCheckLg className='icon'/>Black pepper</p>
                  <p><BsCheckLg className='icon' />1/2 small red onion</p>
                </div>
                <div className='text2'>
                  <p> <BsCheckLg className='icon'/>5 cloves garlic</p>
                  <p><BsCheckLg className='icon'/>1 cup butter, melted</p>
                  <p><BsCheckLg className='icon'/>thinly sliced</p>
                </div>
              </d>
            </div>
            <div className='mada'>
            <h2>I MADE IT!</h2>
            </div>
          </div>
          <div className='src'>
            <img src={user.img} />
          </div>
        </div>

      </div>

    </div>
    </div>
  );
}

export default App;
