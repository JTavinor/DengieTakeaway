import React from "react";
// import pizzaBanner from "../assets/pizzaBanner.jpg";
import "../css/cuisineCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import colors from "../config/colors";

function CuisineCard({ title, backgroundImage }) {
  console.log(backgroundImage);
  return (
    <div className="CuisineCard" style={{ color: colors.white }}>
      <div className="title">{title}</div>
      <div className="chevron">
        <FontAwesomeIcon icon={faChevronDown} size="7x" />
      </div>
      <div
        className="bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="tint" />
    </div>
  );
}

export default CuisineCard;
