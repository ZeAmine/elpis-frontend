import { createContext, useContext, useState } from 'react';

export const AppContext = createContext({});

export const Provider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cursor, setCursor] = useState({ active: false });

  return (
    <AppContext.Provider value={{ auth, setAuth, cursor, setCursor }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext)
};
