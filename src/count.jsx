import { useCount } from './provider';

const Counter = () => {
  const { count, increment, decrement, Reset } = useCount();

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={Reset}>reset</button><br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
