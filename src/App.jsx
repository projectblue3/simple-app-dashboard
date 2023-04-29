import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './app.css';

import Widgets from './components/Widgets/Widgets';

function App() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('dark-theme');
    const [themes, setThemes] = useState(['dark-theme', 'light-theme']);

    return (
        <div id="app" className={theme}>
            <div id="container">
                <div id="top">
                    <div id="site-title">
                        <h1>Simple App Dashboard</h1>
                    </div>
                    <div id="theme-select">
                        <select name="theme" id="theme" onChange={(e) => setTheme(e.target.value)}>
                            <option value="" disabled selected hidden>
                                Change Theme
                            </option>
                            {themes.map((theme) => {
                                return (
                                    <option value={theme} key={themes.indexOf(theme)}>
                                        {theme}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>

                <Widgets />

                <div id="bottom">
                    <div id="social-media"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
