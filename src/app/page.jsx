'use client'
import { useState } from "react";

export default function Home() {

  const [count, setNumber] = useState();

  //note: running the page itself, the button will not update the inputDisplay with text, because router.refresh() won't work

  return (
    <div>

      <input id='inputText' data-testid='inputText'/>
      
      <button onClick={()=>buttonClick(document.getElementById("inputText").value)}>
          Click Me!
      </button>

      <input id='inputDisplay' data-testid='inputDisplay' defaultValue={count} readOnly/>

    </div>
  );
  function buttonClick(count){
    setNumber(count)
    console.log("click")
  }
}