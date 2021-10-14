import React from "react";
import {useState,useEffect} from 'react';
import Title from "components/ui/Title";
import favoriteData from "api/products.json";
import Favorite from "./ui/Favorite";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    setFavorites(favoriteData);
  }, []);
  return (
    <div>
      <Title>Favoriler</Title>
      <div className="grid grid-cols-8 bg-white">
        {favorites &&
          favorites.map((favorite, index) => (
            <Favorite key={index} favorite={favorite} />
          ))}
      </div>
    </div>
  );
}
