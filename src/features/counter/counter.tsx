import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSclice";
import { RootState } from "../../app/store";

const Counter: FunctionComponent = () => {
  const count = useSelector((state:RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;