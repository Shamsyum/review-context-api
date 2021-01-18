import React, {useContext} from 'react';
import ThemeContext from './ThemeContext.js';
import AppTheme from "./Colors.js";

const Main = () => {
    const [theme] = useContext(ThemeContext);
    const currentTheme = AppTheme[theme];
    return (
        <main style = {{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
        }}>
            <h1>Heading 1</h1>
            <p>This is a paragraph</p>
            <button>This is a button</button>
        </main>
    );
}

export default Main;