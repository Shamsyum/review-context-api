import React, {useContext} from 'react';
import ThemeContext from './ThemeContext.js';

const themeTogglerStyle = {
    cursor: "pointer"
}

const ThemeToggler = () => {
    const [theme, setThemeMode] = useContext(ThemeContext);
    function setTheme(){
        setThemeMode(theme === "dark" ? "light" : "dark");
    }
    return(
        <div style = {themeTogglerStyle} onClick={setTheme}>
            <span title = "switch theme">
                <h1>{theme === "light" ? "🌚" : "🌞"}</h1>
            </span>
        </div>
    );
}

export default ThemeToggler;