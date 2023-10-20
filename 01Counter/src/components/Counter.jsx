import React, { useState } from 'react'

function Counter() {

    const [counter , setCounter] = useState(20)
    
    const increaseCounter = () => {
        if(counter >= 20) return 
        else setCounter(counter + 1)
    }
    const decreaseCounter = () => {
        if(counter <= 0 ) return
        else setCounter (counter - 1)
    }
    
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={increaseCounter}>Add</button> {" "}
      <button onClick={decreaseCounter}>Remove</button>
    </div>
  )
}

export default Counter
