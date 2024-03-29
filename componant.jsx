import React, { useState } from 'react';


function Counter(props) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };


    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>{props.title}</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}


function App() {
    return (
        <div>
            <Counter title="Counter App" />
        </div>
    );
}

export default App;
