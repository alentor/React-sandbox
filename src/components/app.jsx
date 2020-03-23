import React, { useState } from 'react';
import { FooUseState } from './fooUseState';
import { FooUseEffect } from './fooUseEffect';
import { Toolbar } from './context';

const themes = {
    light: {
        name: "light",
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        name: "dark",
        foreground: "#ffffff",
        background: "#222222"
    }
};

export const ThemeContext = React.createContext(null);

export function App() {
    const [theme, setTheme] = useState(themes.dark);

    function toggleTheme() {
        setTheme(theme => (theme.name === "light" ? themes.dark : themes.light));
    }

    return (
        <div>
            Hello world
            <h1>UseState</h1>
            <FooUseState />
            <h1>UseEffect</h1>
            <FooUseEffect />
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <Toolbar />
            </ThemeContext.Provider>
            <button onClick={toggleTheme}>Change Theme from parent</button>
        </div>
    );
}