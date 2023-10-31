
import React , { useState } from 'react'
import Callback from './Callback';


function App() {
  // const [counter , setCounter] = useState(20) ;

  // const increment = () => {
  //   setCounter(counter+1) ;
  // }
  // const decrement = () => {
  //   setCounter(counter - 1) ;
  // }
  const [UIcolor , setUIColor] = useState(null) ;

  const getColor = (color) => {
    setUIColor(color) ;
}

  
  return (
  <>
   {/* <div>
    <h1>Counter : {counter} </h1>
    <button  onClick={increment}>Add</button>
    <button  onClick={decrement}>Remove</button>
   </div> */}
   <h1>BOX COLOR CHANGER</h1> 
   <div className="box" style={{height:"100px" , width:"100px" ,backgroundColor: UIcolor , border:'1px solid gray'}}></div>
   <Callback getColor={getColor} />
  </>
  )
}

export default App
