import React, { createContext, useState, useContext } from "react";
import data from "../data.json";

export const SortingContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [sortingList, setSortingList] = useState(data);

  return (
    <SortingContext.Provider value={{ sortingList, setSortingList }}>
      {children}
    </SortingContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(SortingContext);
};
