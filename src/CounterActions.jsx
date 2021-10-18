import { useState } from 'react';
import Counter from './Counter';
import './CounterActions.css'


const CounterActions = () => {

    const [counter, setCounter] = useState(0);

    const plus = () => {
        setCounter(counter + 1)
    }
    const minus = () => {
        if (counter != 0)
            setCounter(counter - 1)
    }

    return (
        <div className="head">
            <h1>Counter
            <Counter counter={counter} plus={plus} minus={minus} />
           </h1>

        </div>


    );
}
export default CounterActions;


