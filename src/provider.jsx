import { createContext, useContext, useState } from "react";

const countContext = createContext();

const CountProvider = ({ children })=> {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () =>{
        setCount(0);
    }

    return (
        <countContext.Provider value={{ count, increment, decrement, reset }}>
            {children}
        </countContext.Provider>
    );

}

const useCount = () => {
    const Context = useContext(countContext);
    if (!Context) {
        throw new Error("Error, occured")
    }
    return Context;
}

export { CountProvider, useCount };