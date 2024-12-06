'use client'
import { use, useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);
  return (
  <div className="grid grid-rows-[20px_1fr_20px] items-center justify">
    <h1>{count}</h1>

    <input type="text" value={setCount}></input>
    <button type="submit" onClick={() => {setCount}}>Click Me!</button>

    <input type="text" value={count} readOnly></input>
  </div>
  );
}
