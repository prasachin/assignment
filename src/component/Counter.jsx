import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)} className="p-5 font-bold">Increament</button>
      <button onClick={() => setCount(0)} className="p-5 font-bold">Reset</button>
    </div>
  );
}
export default Counter;
