import React, { useState } from "react";
import Garage from "./Garage";

const Car = (props) => {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>
        This car is {color} {props.model}.
      </h1>
      <Garage size="small" />
    </div>
  );
};

export default Car;
