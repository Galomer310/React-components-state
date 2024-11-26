import React, { useState } from "react";

const Phone = () => {
  // Define state variables for the phone properties
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });

  // Function to change the color to 'blue'
  const changeColor = () => {
    setPhone((prevPhone) => ({
      ...prevPhone, // Spread operator to preserve other properties
      color: "blue", // Update the color property
    }));
  };

  return (
    <div>
      <h2>My Phone is a {phone.brand}</h2>
      <p>It is a {phone.color} {phone.model} from {phone.year} </p>

      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Phone;
