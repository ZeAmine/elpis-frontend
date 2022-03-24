import { createContext, useContext, useState } from 'react';

export const AppContext = createContext({});

export const Provider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [index, setIndex] = useState(0);

  const [success, setSuccess] = useState(false);

  return (
    <AppContext.Provider value={{ auth, setAuth, success, setSuccess, index, setIndex }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext)
};
