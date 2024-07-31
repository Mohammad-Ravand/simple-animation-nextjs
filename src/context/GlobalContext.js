// src/context/GlobalContext.js
"use client";

import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [loadingCompleted,setLoadingCompleted] = useState(false);
  const [stopLoadingAssets,setStopLoadingAssets] = useState(false);

  return (
    <GlobalContext.Provider value={{
      loadingCompleted,setLoadingCompleted,
      stopLoadingAssets,setStopLoadingAssets
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
