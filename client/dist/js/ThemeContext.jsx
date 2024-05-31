// Create a new file called ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  isSun: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isSun, setIsSun] = useState(false);

  const toggleTheme = () => {
    setIsSun(!isSun);
  };

  return (
    <ThemeContext.Provider value={{ isSun, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// export default ThemeContext;