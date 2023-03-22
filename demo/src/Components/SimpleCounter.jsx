import { useState } from "react";


const SimpleCounter = (props) => {


    const [counter, setCounter] = useState(0);
    const handleClickIncrease = () => {
        // const newCounter = counter + 1;
        // setCounter(newCounter);
        setCounter((prevState) => prevState + 1);
    }
    const handleClickDescrease = () => {
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        const newCounter = counter - 1;
        setCounter(newCounter);
    }

    return ( 
        <>
        <div>
            <h4>Current number: {counter}</h4>
        </div>
        <button onClick={handleClickIncrease}>Increase</button>
        <button onClick={handleClickDescrease}>Descrese</button>
        </>
     );
}
 
export default SimpleCounter;