import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* display: grid;
  grid: 150px / auto auto auto; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 2fr));
  max-width: 100vw;
  margin: 10px;
  gap: 5em;
  grid-auto-rows: 300px;
`;

const Img = styled.div`
  border-radius: 50%;
  background-color: red;
  box-shadow: 1px 2px 3px gray;
  ${(props) =>
    props.src &&
    `background-image: url(${props.src}); background-size:cover; background-position:center; background-repeat: no-repeat;`}
`;

const Box = styled.div`
  border-radius: 10px;
  box-shadow: 1px 4px 3px gray;
  padding: 10px;
`;

const Items = ({ menuItems }) => {
  return (
    <>
      <Wrapper>
        {menuItems.map((menuList) => {
          const { id, title, category, price, img, desc } = menuList;
          return (
            <>
              <Box key={id}>
                <div>
                  {/* <Img src={img} height={200} /> */}
                  <img src={img} alt={title} height={200} width={300} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>${price}</p>
                  <p>{desc}</p>
                </div>
              </Box>
            </>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Items;
