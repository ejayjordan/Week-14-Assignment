'use client'
import { use, useState } from "react";

export default function Home() {

  const [count, setCount] = useState();

  return (
  <div className="grid grid-rows-[20px_1fr_20px] items-center justify">

    <input role="inputText" type="text" value={count}></input>
    <button type="submit" value="submit" onClick={() => {
      setCount(count)
    }}>Click Me!</button>

  </div>
  );
}
