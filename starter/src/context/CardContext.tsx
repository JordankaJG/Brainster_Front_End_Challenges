import { createContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { RestaurantI } from "../interfaces/interfaces";

interface CardContextData {
  allRestaurants: RestaurantI[];
}

export const CardContext = createContext<CardContextData>({
  allRestaurants: [],
});

export const CardPovider = ({ children }: { children: React.ReactNode }) => {
  const allRestaurants = useFetch<RestaurantI[]>(
    "http://localhost:5001/restaurants"
  );

  const [filteredRestaurants, setFilteredRestaurants] = useState<RestaurantI[]>(
    allRestaurants || []
  );

  useEffect(() => {
    setFilteredRestaurants(allRestaurants || []);
  }, [allRestaurants]);

  return (
    <CardContext.Provider value={{ allRestaurants: filteredRestaurants }}>
      {children}
    </CardContext.Provider>
  );
};
