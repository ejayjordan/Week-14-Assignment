'use client'
import { use, useState } from "react";

export default function Home() {

  const [count, setCount] = useState('40');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(event.target.value)
  }
  
  return (
  <div className="grid grid-rows-[20px_1fr_20px] items-center justify">

    <input type="text" value={count} onChange={handleChange}></input>
    <button type="submit" value="submit">Click Me!</button>
    <input type="text" value={count} readOnly></input>

  </div>
  );
}
