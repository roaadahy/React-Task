import './CounterActions.css'

function Counter(props) {


    return (
        <div className="navbar">

            <button onClick={props.plus}>+</button>
            <h1>{props.counter}</h1>
            <button onClick={props.minus}>-</button>
        </div>
    );
}
export default Counter;





