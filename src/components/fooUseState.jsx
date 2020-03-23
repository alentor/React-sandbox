import React, { useState } from 'react';

export function FooUseState() {
    // Declare a new state variable, which we'll call "count"
    const [count, fooSetCount] = useState(0);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    function meow() {
        return fooSetCount(count + 1);;
    }

    return (
        <div>
            <p>{fruit}</p>
            <p>{todos[0].text}</p>
            <p>You clicked {count} times</p>
            <button onClick={() => meow()}>
                Click me
      </button>
        </div>
    );
}