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
  padding: 1rem;
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
  const { title, desc, modalFun } = props;
  const displayTitle = title?.length > 20 ? title?.slice(0, 20) + "..." : title;
  const displayDesc = desc?.length > 100 ? desc?.slice(0, 100) + "..." : desc;
  return (
    <Box {...props}>
      <Image>
        <img
          src={props?.img ? props?.img : ""}
          alt=""
          onClick={modalFun}
          style={{
            width: "100%",
            height: "100%",
            cursor: "pointer",
            borderRadius: "1.75rem 1.75rem 0 0",
          }}
        />
      </Image>
      <div style={{ margin: "2rem 0 0 0" }}>
        <Heading Text={displayTitle} fs="1.5rem" />
        <Text Text={displayDesc} lh="1.5rem" />
        <Flex jc="space-between">
          <Heading Text={props?.price} />
          <Button onClick={props?.addToCart} text="add to cart" width="10rem" />
        </Flex>
      </div>
    </Box>
  );
};

export default Card;
