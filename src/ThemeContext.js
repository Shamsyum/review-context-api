import createContext from "react";

const ThemeContext = createContext({theme: "dark", setThemeMode: () => {}});
export default ThemeContext;    