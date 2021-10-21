
import { createStore } from "redux"


const DECREMENT_COUNT = "DECREMENT_COUNT";
const INCREMENT_COUNT = "INCREMENT_COUNT";


//actions
export const incrementCount = () => {
    return {
        type: INCREMENT_COUNT
    }
};

 export const decrementCount = () => {
    return {
        type: DECREMENT_COUNT
    }
};

//state
const initialState = {
    counter: 0,
};
//reducer
export const counterReducer = (state= initialState, action) => {

    if (state.counter === 0 && action.type === DECREMENT_COUNT) {
        return state;
      }
        
      switch (action.type) {
        case INCREMENT_COUNT:
          return { ...state, counter: state.counter + 1 };
        case DECREMENT_COUNT:
          return { ...state, counter: state.counter - 1 };
        default:
          return state;
      }

}

//store
export const store = createStore(counterReducer);
