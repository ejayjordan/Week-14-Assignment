'use client'
import { SetStateAction, use, useState } from "react";

export default function Home() {

  const [count, setCount] = useState();

  return (
    <div>
      <input id='inputDisplay' data-testid='inputDisplay'/>
      <input id='inputText' data-testid='inputText' defaultValue={count}/>
      <button onClick={()=> buttonClick(document.getElementById("inputDisplay").value)}>
          Click Me!
        </button>
    
    </div>
  );
  function buttonClick(count: SetStateAction<undefined>){
    setCount(count)
  }
}