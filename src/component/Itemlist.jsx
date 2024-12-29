import React, { useState } from "react";

const Itemlist = () => {
  const [items, setitems] = useState(["apple", "banana", "cherry"]);
  console.log(items);
  return (
    <div className="text-center">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Itemlist;
