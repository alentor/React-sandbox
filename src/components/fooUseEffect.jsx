import React, { useState, useEffect } from 'react';
import { useInterval } from './useInterval';

export function FooUseEffect() {
    // 1. Use the name state variable
    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(0);

    useInterval(() => {
        // Your custom logic here
        setCount(count + 1);
    }, delay);

    // 2. Use an effect for persisting the form
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        // return () => { console.log(`cleanup ran => ${count}`) };
    }, [count]);

    function handleDelayChange(e) {
        setDelay(Number(e.target.value));
    }

    return (
        <div>
            <h1>{count}</h1>
            <input value={delay} onChange={handleDelayChange} />
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}> Click me to increase counter </button>
        </div>
    );
}