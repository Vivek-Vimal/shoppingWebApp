import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import { Text } from "../Text";
import Flex from "../Styling/Flex";
import { Heading } from "../Heading";
import { Button } from "../Button";

const Box = styled.div`
  width: 22rem;
  min-height: 30rem;
  margin: 2rem auto 0 auto;
  border-radius: 1.75rem 1.75rem 0 0;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  @media only screen and (max-width: 510px) {
    width: 98%;
  }
`;

const Image = styled(Tilt)`
  width: 100%;
  height: 20rem;
`;

const Card = (props) => {
  return (
    <Box {...props}>
      <Image>
        <img
          src={props?.img ? props?.img : ""}
          alt=""
          onClick={props?.modalFun}
          style={{
            width: "100%",
            height: "100%",
            border: "1.75rem 1.75rem 0 1.75rem",
            cursor: "pointer",
          }}
        />
      </Image>
      <div style={{ padding: "1rem" }}>
        <Text Text={props?.title} />
        <Text Text={props?.desc} />
        <Flex jc="space-between">
          <Heading Text={props?.price} />
          <Button onClick={props?.addToCart} text="add to cart" width="10rem" />
        </Flex>
      </div>
    </Box>
  );
};

export default Card;
