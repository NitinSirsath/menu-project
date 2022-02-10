import React, { useState } from "react";
import styled from "styled-components";

const Heading = styled.h1`
  margin: 10px 63px;
`;
const Incbutton = {
  color: "red",
};
const Count = () => {
  const [inc, setInc] = useState("shantanu");

  const handleIncrease = () => {
    setInc(inc + 1);
  };
  const handeldecrease = () => {
    setInc("shantanu kulkarni");
  };

  return (
    <div>
      <Heading>{inc}</Heading>
      <button style={Incbutton} onClick={handeldecrease}>
        change
      </button>
      <button onClick={handleIncrease}>increase</button>
    </div>
  );
};

export default Count;
