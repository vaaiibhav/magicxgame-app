import React from "react";
import MenuCards from "./MenuCards";
import "./GameMenu.css";
import jhandiMundaImage from "../../assets/Game1/jhandiMundaThumbnail.jpg";
import fighterWheelImage from "../../assets/Game2/fighterWheelThmbnail.jpg";

const GameMenu = () => {
  const cardData = [
    {
      id: 1,
      title: "GudGudi Game",
      imageUrl: jhandiMundaImage,
      navigate: "/gudigudi",
    },
    {
      id: 2,
      title: "Fighter Wheel",
      imageUrl: fighterWheelImage,
      navigate: "/fighterwheel",
    },
    {
      id: 3,
      title: "Fighter Wheel 95",
      imageUrl: jhandiMundaImage,
      navigate: "/fighterwheel95",
    },
    {
      id: 4,
      title: "Lucky Card",
      imageUrl: fighterWheelImage,
      navigate: "/luckycard",
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
