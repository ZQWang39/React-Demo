/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef("");
  const prevName = useRef("Ziqi");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [name]);

  const focus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <p>My name is {name}</p>
      <p>My previous name is {prevName.current}</p>
      <p>I rendered {renderCount.current} times.</p>

      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default UseRef;
