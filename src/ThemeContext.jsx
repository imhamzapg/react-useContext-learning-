import { createContext} from "react";
import { useState } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider