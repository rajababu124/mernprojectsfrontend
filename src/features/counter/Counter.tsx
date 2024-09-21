// import React from 'react'
import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value) // To read or fetch the state or state value
  const dispatch = useDispatch() // To call reducer fucntions

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span style={{margin:'0px'}}>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}
