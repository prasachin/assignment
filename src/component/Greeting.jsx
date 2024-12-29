import { useState } from "react";
function Greeting() {
  const [name, setName] = useState("");
  const [show, setshow] = useState("");
  const handleclick = () => {
    setshow(`${name}`);
    setName("");
  };
  return (
    <div className="text-center">
      <input
        type="text"
        className="bg-gray-200"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleclick}>Greet</button>
      {show && <h1>Hello {show} ! </h1>}
    </div>
  );
}
export default Greeting;
