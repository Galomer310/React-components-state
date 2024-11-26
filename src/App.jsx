import React from "react";
import Car from "./components/Car.jsx";
import Events from "./components/Events.jsx";
import Phone from "./components/Phone.jsx";
import Color from "./components/Color.jsx";



const App = () => {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
      <Car model={carinfo.model} />
      <Events/>
      <Phone/>
      <Color/>
    </div>
  ) 
  
  
  
};

export default App;
