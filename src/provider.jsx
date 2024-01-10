import { createContext, useContext, useState } from "react";

const countContext = createContext();

const CountProvider = ({ children })=> {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    };

    const Decrement = () => {
        setCount(count - 1);
    }

    const Reset = () =>{
        setCount(0);
    }

    return (
        <countContext.Provider value={{ count, Increment, Decrement, Reset }}>
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