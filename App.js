import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter title="Counter 1" />
      <Counter title="Counter 2" />
    </div>
  );
};

export default App;