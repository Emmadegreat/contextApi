import './App.css';

import {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count + -1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div className='cont'>
            <h2>My counter App</h2>
            <p>{count}</p>
            <div className='holder'>
                <button onClick={increaseCount}>+</button><br />
                 <button onClick={resetCount}>reset</button><br />
                <button onClick={decreaseCount}>-</button>
            </div>
        </div>
    )
}

export default Counter
