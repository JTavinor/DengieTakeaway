import React from "react";
import CuisineCard from "./cuisineCard";
import "../css/cuisineList.css";

function CuisineList({ cuisines }) {
  const renderCuisines = (cuisines) => {
    console.log(cuisines);
    const list = cuisines.map((cuisine) => (
      <li>
        <CuisineCard
          title={cuisine.name}
          backgroundImage={cuisine.background}
        />
      </li>
    ));
    return <ul>{list}</ul>;
  };

  return <div className="cuisineContainer">{renderCuisines(cuisines)}</div>;
}

export default CuisineList;
