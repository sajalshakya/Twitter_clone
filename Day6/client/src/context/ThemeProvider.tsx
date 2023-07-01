import React, {useState, ReactNode, PropsWithChildren} from "react";
import { TThemeContextType } from "twitter/type";


export const ThemeContext  = React.createContext<TThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <ThemeContext.Provider value={[darkMode, setDarkMode]}>
            {children}
        </ThemeContext.Provider>
    )
}