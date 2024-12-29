import React from "react";
import Counter from "./component/Counter";
import Itemlist from "./component/Itemlist";
import Toggletext from "./component/Toggletext";
import Livepreview from "./component/Livepreview";
import Greeting from "./component/Greeting";
import Likebutton from "./component/Likebutton";
import Todoapp from "./component/Todoapp";
function App() {
  return (
    <>
      <li className="text-center font-bold">1:counterApp</li>
      <Counter />

      <li className="text-center font-bold">2:Greeting</li>
      <Greeting />

      <li className="text-center font-bold">3:Toggle paragraph</li>
      <Toggletext />
      <li className="text-center font-bold">4:Itemlist</li>
      
      <Itemlist />
      <li className="text-center font-bold">5:Likebutton</li>
      
      <Likebutton />
      <li className="text-center font-bold">6:Livepreview</li>
      
      <Livepreview />
      <li className="text-center font-bold">7:Todoapp</li>
      
      <Todoapp/>
    </>
  );
}

export default App;
