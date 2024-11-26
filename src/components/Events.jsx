import React, { useState } from "react";

const Events = () => {
  // State to hold the input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle key down
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`The Enter key was pressed, your input is: ${inputValue}`);
    }
  };

  // Function to update the input value on change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // State to toggle between ON and OFF
  const [isToggleOn, setIsToggleOn] = useState(true);

  // Function to toggle the state
  const toggleState = () => {
    setIsToggleOn((prevState) => !prevState);
  };

  return (
    <div>
      {/* Input field with onKeyDown */}
      <input
        type="text"
        placeholder="Press the ENTER key!"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      {/* Toggle Button */}
      <button onClick={toggleState}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Events;
