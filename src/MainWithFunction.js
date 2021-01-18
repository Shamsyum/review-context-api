import React, {useContext} from 'react';
import ThemeContext from './ThemeContext.js';
import './MainWithFunction.css';

const Main = () => {
    const [theme, setThemeMode] = useContext(ThemeContext);
    return (
        <main className={`${theme}`}>
            <h1>Heading 1</h1>
            <p>This is a paragraph</p>
            <button>This is a button</button>
        </main>
    );
}

export default Main;