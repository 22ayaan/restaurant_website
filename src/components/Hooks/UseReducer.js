import React, { useEffect, useReducer, useState } from 'react'
import "./style.css"

const reducerFunc = (state, action) => {
  if (action.type === "Increment") {
    return state + 1
  }
  if (state > 0 && action.type === "Decrement") {
    return state - 1
  }
  return state
}

const UseReducer = () => {
  const initialData = 0
  const [currState, dispatchMethod] = useReducer(reducerFunc, initialData) // (reducerFunc, initialData)

  return (
    <>
      <div className='center_div'>
        <p>{ currState }</p>
        <div class='button2' onClick={() => dispatchMethod({ type: "Increment" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Increment
        </div>
        <div class='button2' onClick={() => dispatchMethod({ type: "Decrement" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Decrement
        </div>
      </div>
    </>
  )
}

export default UseReducer