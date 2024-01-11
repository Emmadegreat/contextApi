import { useCount } from './provider';

const Counter = () => {
  const { count, increment, decrement, reset } = useCount();

  return (
    <div className='flex flex-col justify-center items-center pt-8'>
        <h1 className='mb-4 text-2xl font-medium'>Counter: {count}</h1>
        <div className='flex justify-center'>
          <button className="bg-blue-500 text-[#fff] text-xl border-2 rounded p-2" onClick={increment}>Increment</button>
          <button className="bg-blue-500 text-[#fff] text-xl border-2 rounded p-2 mx-4" onClick={reset}>reset</button><br />
          <button className="bg-blue-500 text-[#fff] text-xl border-2 rounded p-2" onClick={decrement}>Decrement</button>
        </div>
    </div>
  );
};

export default Counter;
