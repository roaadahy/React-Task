import './CounterActions.css'
import {incrementCount} from '../../myfirstreact/src/Redux/count'
import { useDispatch } from 'react-redux';
import {decrementCount} from '../../myfirstreact/src/Redux/count'
import { useSelector } from 'react-redux';


const CounterActions = () => {
    const counter = useSelector((state) => state.counter);


    const dispatch = useDispatch();

    const increment = () => {
        dispatch(incrementCount())
    }
    const decrement = () => {
        dispatch(decrementCount())

    }

    return (
        <div className="head">
              <button onClick={increment}>+</button>
              <h1>{counter}</h1>
            <button onClick={decrement}>-</button>

        </div>


    );
};
export default CounterActions;