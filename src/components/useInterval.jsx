import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            // Invoke callback.
            savedCallback.current();
        }
        if (delay) {
            let id = setInterval(tick, delay);
            console.log(`interval id ${id}`);
            return () => clearInterval(id);
        }
    }, [delay]);
}

