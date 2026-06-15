import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext'

const Navbar = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                Toggle Theme {theme}
            </button>
            <h1 style={{color: theme === 'dark' ? 'gray' : 'black'}}>Navbar</h1>
        </div>
    )
}

export default Navbar