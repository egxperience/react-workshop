import React, { useState } from 'react'

import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import 'YesterTech/Quantity.scss'

// const states = [] // cache
// let calls = -1

// function useState(defaultState) {
//   const callId = ++calls

//   if (states[callId]) {
//     return states[callId]
//   }

//   function updateState(newState) {
//     states[callId][0] = newState
//     calls = -1
//     reRender()
//   }

//   const state = [defaultState, updateState]
//   states[callId] = state
//   return state
// }

// function reRender() {
//   ReactDOM.render(<Quantity />, document.getElementById('root'))
// }

export default function Quantity() {
  const [quantity, setQuantity] = useState(0)
  const [error, setError] = useState(null)

  function subtract() {
    const newQuantity = quantity - 1
    setQuantity(newQuantity)
    if (newQuantity < 0) {
      setError('Cannot be less than 0')
    }
  }

  function add() {
    setQuantity(quantity + 1)
  }

  const output = (
    <div className="quantity-picker">
      <div>
        <div>
          <button onClick={subtract} type="button" className="icon-button">
            <FaMinusCircle />
          </button>
        </div>
        <div className="input-container">{quantity}</div>
        <div>
          <button onClick={add} type="button" className="icon-button">
            <FaPlusCircle />
          </button>
        </div>
      </div>
      <p>{error}</p>
    </div>
  )
  console.log(output)
  return output
}
