import { createContext, useState } from "react";

export const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [lang, setLang] = useState("es");
  return (
    <Context.Provider value={{ lang, setLang }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
