import React from "react";

// Theme values
export const LightThemeName = 'light';
export const DarkThemeName = 'dark';

type AppThemeContextType = {
    theme: string;
    setTheme: (value: string) => void;
};

type AppThemeContextProps = {
    children: React.ReactNode
}

// Initially undefined, until the <ThemeProvider> component is mounted
const AppThemeContext = React.createContext<AppThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: AppThemeContextProps) => {

    const [theme, setTheme] = React.useState(LightThemeName);

    // On mount, set default value from undefined
    React.useEffect(() => {
        setTheme(LightThemeName);
    }, []);

    return (
        <AppThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </AppThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(AppThemeContext);