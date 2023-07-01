import React, {useState, ReactNode, PropsWithChildren, useContext} from "react";
import { TThemeContextType_new } from "twitter/type";


export const ThemeContext  = React.createContext<TThemeContextType_new>({
    darkMode: false,
    toggleDarkMode: () => {},
  });

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <ThemeContext.Provider value={{
            darkMode: darkMode,
            toggleDarkMode: () => setDarkMode((prevState)=> {return !prevState})
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => {
    return useContext(ThemeContext)
}