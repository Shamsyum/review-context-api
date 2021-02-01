import {useSelector} from 'react-redux';
import AppTheme from './Colors';

const Main = () => {

    const theme = useSelector((state)=>{
        return state.theme;
    })
    
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
