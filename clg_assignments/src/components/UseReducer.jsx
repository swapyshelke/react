import React, { useReducer } from 'react';

const initialValue = 0;

const reducer = (state, action) => {
  switch(action){
    case "Increment":
      return state+1;
    case "DEcrement":
      return state - 1;
    default:
      return state;
  }
}

const UseReducer = () => {
 const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <button onClick={() => dispatch("")}>Increment</button>
      <button>Decrement</button>
    </div>
  )
}

export default UseReducer