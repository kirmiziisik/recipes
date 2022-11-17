import React, { useContext, useEffect, useState } from "react";

const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchTerm}`);
      const data = await res.json();
      const { meals } = data;
      if (meals) {
        const newMeals = meals.map((meal) => {
          const {
            idMeal,
            strMeal,
            strCategory,
            strArea,
            strInstructions,
            strMealThumb,
            strYoutube,
          } = meal;
          return {
            id: idMeal,
            name: strMeal,
            category: strCategory,
            area: strArea,
            instructions: strInstructions,
            img: strMealThumb,
            video: strYoutube,
          };
        });
        setMeals(newMeals);
      } else {
        setMeals([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, meals, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
