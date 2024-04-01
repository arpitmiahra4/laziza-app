import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(0);

  const toggleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % theme.length);
  };

  const theme = [
    {
      text: "#f71000",
      bgColor: (opacity) => `rgba(247, 16, 0, ${opacity})`,
    },
    {
      text: "#f97316",
      bgColor: (opacity) => `rgba(251, 146, 60, ${opacity})`,
    },
    {
      text: "#334155",
      bgColor: (opacity) => `rgba(30,41,59, ${opacity})`,
    },
    {
      text: "#7c3aed",
      bgColor: (opacity) => `rgba(167,139,250, ${opacity})`,
    },
    {
      text: "#009950",
      bgColor: (opacity) => `rgba(0,179,89, ${opacity})`,
    },
    {
      text: "#14b8a6",
      bgColor: (opacity) => `rgba(45,212,191, ${opacity})`,
    },
  ];

  const themeColors = theme[themeIndex];

  return (
    <ThemeContext.Provider value={{ themeColors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
