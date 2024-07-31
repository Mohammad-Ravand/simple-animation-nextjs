// src/context/GlobalContext.js
"use client";

import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    theme: 'light',
  });
  const [loadingCompleted,setLoadingCompleted] = useState(false);


  const updateUser = (user) => setState((prevState) => ({ ...prevState, user }));
  const toggleTheme = () => setState((prevState) => ({ ...prevState, theme: prevState.theme === 'light' ? 'dark' : 'light' }));

  return (
    <GlobalContext.Provider value={{ state, updateUser, toggleTheme,
      loadingCompleted,
      setLoadingCompleted, }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
