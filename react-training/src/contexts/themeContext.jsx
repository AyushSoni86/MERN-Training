import { createContext, useState } from "react";

export const themeContext = createContext();

const Provider = themeContext.Provider;

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return <Provider value={{ theme, toggleTheme }}>{children}</Provider>;
};
