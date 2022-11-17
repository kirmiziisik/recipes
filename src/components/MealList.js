import React from "react";
import Meal from "./Meal";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const MealList = () => {
  const { meals, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (meals.length < 1) {
    return <h2>no meals found</h2>;
  }
  return (
    <section className="meal-list">
      {meals.map((meal) => {
        return <Meal key={meal.id} {...meal} />;
      })}
    </section>
  );
};

export default MealList;
