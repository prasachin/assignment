import React, { useState } from "react";

const Toggletext = () => {
  const [text, settext] = useState("Show");
  const [flag , setflag] = useState(false) ;
  function handleclick() {
    if(text == "Show")
    {
      settext("Hide") ;
    }
    else 
    {
      settext("Show") ;
    }
    setflag(!flag) ;
  }
  return (
    <div className="text-center">
      <button onClick={handleclick}>{text}</button>
      {flag && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim quas
          consectetur illo voluptatum asperiores amet similique facere veritatis
          repudiandae. Ipsum excepturi consequuntur quidem, quos a tempore
          asperiores vitae itaque?
        </p>
      )}
    </div>
  );
};

export default Toggletext;
