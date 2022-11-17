import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ name, category, area, instructions, img, video, id }) => {
  return (
    <article className="meal">
      <div className="img-container">
        <img src={img} alt="Meal-image" />
      </div>
      <div className="meal-info">
        <h2 className="meal-name">{name}</h2>
        <section className="meal-snippet-info">
          <h4 className="meal-category">📚 {category}</h4>
          <h4 className="meal-area">🌎 {area}</h4>
        </section>
        <Link to={`/meal/${id}`} className="btn">
          Recipe
        </Link>
      </div>
    </article>
  );
};

export default Meal;
