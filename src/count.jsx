import { useCount } from './provider';

const Counter = () => {
  const { count, increment, decrement, reset } = useCount();

  return (
    <div>
        <h1>Counter: {count}</h1>
        <div className='flex justify-center'>
          <button onClick={increment}>Increment</button>
          <button className="mx-4" onClick={reset}>reset</button><br />
          <button onClick={decrement}>Decrement</button>
        </div>
    </div>
  );
};

export default Counter;
