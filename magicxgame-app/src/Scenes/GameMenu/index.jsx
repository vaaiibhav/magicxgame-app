import React from "react";
import MenuCards from "./MenuCards";
import "./GameMenu.css";
import gameLayout from "../../assets/Game1/jhandiMundaThumbnail.jpg";

const GameMenu = () => {
  const cardData = [
    {
      id: 1,
      title: "GudGudi Game",
      imageUrl: gameLayout,
      navigate: "/gudigudi",
    },
    {
      id: 2,
      title: "Card 2",
      imageUrl: gameLayout,
    },
    {
      id: 3,
      title: "Card 3",
      imageUrl: gameLayout,
    },
  ];
  return (
    <div className="menu-layout">
      <h1> Welcome to Blue Fighter</h1>
      <MenuCards cardData={cardData} />
    </div>
  );
};

export default GameMenu;
