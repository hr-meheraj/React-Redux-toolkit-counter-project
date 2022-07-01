import { useSelector, useDispatch } from "react-redux";
import { increase, descrease, reset } from "../counterSlice";
import React from 'react'

function Counter() {
    const count = useSelector(state => state.value);
    console.log(count);
    const dispatch = useDispatch()

  return (
    <div className="container">
       <div className="title">
              <h3>Redux Toolkit</h3>
              <h1>{count}</h1>
       </div>
        <div className="btns">
              <button onClick={() => dispatch(increase())}> Increase</button>
              <button onClick={() => dispatch(reset())}>Reset</button>
              <button onClick={() => dispatch(descrease())}>Decrease</button>
        </div>
    </div>
  )
}

export default Counter