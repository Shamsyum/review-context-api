import React, { useContext } from 'react';
import ThemeToggler from "./ThemeToggler.js";

const headerStyles = {
    padding: "1rem",
    display: "flex",
    justfyContent: "space-between",
    alignItem: "center"
}

const Header = () => {
    return(
        <header style = {headerStyles}>
            <h1>Context API</h1>
            <ThemeToggler />
        </header>
    );
}

export default Header;