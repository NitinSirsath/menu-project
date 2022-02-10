import React, { useState } from "react";
import data from "./data";
import Items from "./Items";
import styled from "styled-components";
const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;
const Heading = styled.h2`
  text-align: center;
  color: lightblue;
`;

const Button = styled.button`
  background-color: #13abf1;
  border-radius: 5px;
  padding: 3px 10px;
  margin: 5px;
  color: #444242;
  border: none;
  cursor: pointer;
`;

const Mainmenu = () => {
  const [menu, setMenu] = useState(data);

  const filterMenu = (category) => {
    const updateMenu = data.filter((ele) => {
      return ele.category === category;
    });
    setMenu(updateMenu);
  };

  const categories = ["all", ...new Set(menu.map((cat) => cat.category))];
  console.log(categories);
  return (
    <>
      <div>
        <Heading>Todays Menu</Heading>
      </div>
      <Buttons>
        <Button onClick={() => setMenu(data)}>all</Button>
        <Button onClick={() => filterMenu("breakfast")}>breakfast</Button>
        <Button onClick={() => filterMenu("lunch")}>lunch</Button>
        <Button onClick={() => filterMenu("shakes")}>shakes</Button>
      </Buttons>

      <div>
        <Items menuItems={menu} />
      </div>
    </>
  );
};

export default Mainmenu;
