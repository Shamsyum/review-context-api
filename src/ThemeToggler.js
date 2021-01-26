import {useDispatch, useSelector} from 'react-redux';

const themeTogglerStyle = {
    cursor: "pointer"
}

const ThemeToggler = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state)=>{
        return state.theme;
    });
    return(
        <div style = {themeTogglerStyle} onClick={()=>dispatch({type: 'TOGGLE'})}>
            <span title = "switch theme">
                <h1>{theme === "light" ? "🌚" : "🌞"}</h1>
            </span>
            theme in toggle is: {theme}
        </div>
    );
}

export default ThemeToggler;