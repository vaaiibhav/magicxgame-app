import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Button } from "react-bootstrap";
import "./GameMenu.css";
const MenuCards = (props) => {
  const preventDragHandler = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate();

  const goToGame = (navigateTo) => {
    navigate(navigateTo);
  };

  return (
    <div className="container-fluid border-2 border-black">
      <div className="row">
        {props?.cardData?.map((card, index) => (
          <div
            className="card col-lg-3 col-md-3 col-sm-10"
            key={index}
            draggable="false"
            onClick={() => goToGame(card?.navigate)}
          >
            <img
              src={card?.imageUrl}
              draggable="false"
              className="card-img-top"
              alt={card?.title}
            />
            <div className="card-body">
              <p className="card-title">{card?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCards;
