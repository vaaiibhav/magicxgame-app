import React from "react";
import MenuCards from "./MenuCards";
import styles from "./gamemenu.module.css";
import jhandiMundaImage from "../../assets/Game1/jhandiMundaThumbnail.jpg";
import fighterWheelImage from "../../assets/Game2/fighterWheelThumbnail.jpg";
import fighterWheel95Image from "../../assets/Game3/fighterWheel95Thumbnail.jpg";

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
      imageUrl: fighterWheel95Image,
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
    <div className={styles.menulayout}>
      <h1> Welcome to Blue Fighter</h1>
      <MenuCards cardData={cardData} />
    </div>
  );
};

export default GameMenu;
