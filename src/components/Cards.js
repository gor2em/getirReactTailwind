import React from "react";
import { useState,useEffect } from "react";
import cardsData from 'api/cards.json';

export default function Cards() {

    const [cards,setCards] = useState([]);
    useEffect(() => {
        setCards(cardsData);
    }, [])
  
  return (
      <div className="grid grid-cols-3 gap-x-4 mt-6">
          {cards.length && cards.map(card=>(
              <div className="bg-white p-10 shadow-sm rounded-lg flex flex-col items-center">
                  <img src={card.image} className="mb-6"/>
                  <h6 className="text-primary-brand-color text-lg">{card.title}</h6>
                  <p className="mt-2 text-center text-gray-400 font-light">{card.description}</p>
              </div>
          ))}
      </div>
  );
}
