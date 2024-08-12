import { useState } from 'react'
import Counter  from './Component/Counter/Count'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const increment = () =>{

    console.log("increment");

    setCount(count + 1);
    
  }

    const decrement = () =>{

    console.log("decrement");

    if(count > 0){

        setCount(count - 1);

    }else{

        alert("Count cannot be less than 0");
        
    }
  }


  return (
   <div className='box'>
    <Counter count = {count} inc = {increment} dec = {decrement}/>
   </div>
  )
}

export default App
