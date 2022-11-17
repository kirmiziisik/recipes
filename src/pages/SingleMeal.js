import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const SingleMeal = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchMeal = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        if (data.meals) {
          setMeal(data.meals[0]);
        } else {
          setMeal(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchMeal();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!meal) {
    return <h2>no meal to display</h2>;
  } else {
    console.log(meal);
    const {
      strMeal: name,
      strArea: area,
      strCategory: category,
      strInstructions: instructions,
      strYoutube: video,
      strMealThumb: img,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
      strIngredient16,
      strIngredient17,
      strIngredient18,
      strIngredient19,
      strIngredient20,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      strMeasure8,
      strMeasure9,
      strMeasure10,
      strMeasure11,
      strMeasure12,
      strMeasure13,
      strMeasure14,
      strMeasure15,
      strMeasure16,
      strMeasure17,
      strMeasure18,
      strMeasure19,
      strMeasure20,
    } = meal;
    return (
      <section className="section-meal">
        <h2 className="section-title">{name}</h2>
      </section>
    );
  }

  return (
    <section>
      <h2 className="section-title"></h2>
    </section>
  );
};

export default SingleMeal;
