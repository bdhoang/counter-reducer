import React from "react";
import { useImmerReducer } from "use-immer";

const initialState = { count: 0 };

function reducer(draft, action) {
  switch (action.type) {
    case "increment":
      return void draft.count++;
    case "decrement":
      return void draft.count--;
    default:
      throw new Error();
  }
}

export default function ReducerCounter() {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <div>
      <h1>UseReducer Counter</h1>
      <h2>{state.count}</h2>
      <>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </>
    </div>
  );
}
