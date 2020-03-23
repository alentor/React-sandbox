import React, { useContext } from 'react';
import { ThemeContext } from './app'

export function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>
            <br/>
            <button onClick={toggleTheme}>Change Theme from child</button>
        </>
    );
}