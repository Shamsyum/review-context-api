import React, {useState} from 'react';
import ThemeContext from './ThemeContext.js';
import Header from './Header.js';
import Main from './MainWithFunction.js';

import './App.css';

function App() {
  const [theme, setThemeMode] = useState("dark");
  return (
    <ThemeContext.Provider value = {[ theme, setThemeMode ]}>
      <div>
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
