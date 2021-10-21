
import { createStore } from "redux";

//action
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

export const addTodoAction = (payload) => {
    console.log(payload)
    return {
        type: ADD_TODO,
        payload
    }
}

export const deleteTodoAction = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}
//state
const initialState = {
    todos: []
}
//reducer
const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]};
        case DELETE_TODO:
           return {...state, todos: [...state.todos.filter((todo,i) => i !== action.payload)]}
        default:
            return state;
           
          }
    }

//store
export const store = createStore(todoReducer)



