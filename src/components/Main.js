import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

function Test() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="test">
            <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>+</button>
        </div>
    )
}

export default Test;