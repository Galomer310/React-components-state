import React, { useState, useEffect } from "react";

const Color = () => {
  const [favoriteColor, setColor] = useState("red");

  // useEffect hook to alert when the component is rendered
  useEffect(() => {
    alert("useEffect reached");
  }, []); // The empty dependency array ensures this runs only once after the first render

  // Function to change the favorite color to blue
  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h2>My Favorite Color is {favoriteColor}</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Color;
