import React, { useState } from "react";
import React from 'react';
import Card from './components/Card';
import Button from './components/Button';
import getContentCards from './assets/getContentCards';
import './global.css';

function App() {
    const data= getContentCards();
    // console.log(data);
    // const card = data[0];
    const [quantity, setQuantity] = useState(5);
    const remove =() =>{
        setQuantity(quantity - 1);
    }
    const add =() =>{
        setQuantity(quantity + 1);
    }
    const card=[];
    for(let i = 0 ; i < quantity ; i++){
        card.push(<Card data = {card[i]} />);
    }
    return (
        <>
            <section className = "button-container">
                <button 
                content ="Remove Card" 
                id ="removeCard" 
                click={remove}
                disabled = {quantity <= 0}
                />
                {quantity}
                <button 
                content ="Add Card" 
                id ="addCard" 
                click={add}
                disabled = {quantity >= 5}
                />
            </section>
            <section className='container-cards'>
            {cards }
            {
                // data.map((card)=>{
                // return <Card data = {card} />;
                // })
            }
            </section>
        </>
    );
}

export default App;