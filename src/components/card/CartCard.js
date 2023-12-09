import React from "react";
import { Heading } from "../Heading";
import Flex from "../Styling/Flex";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import styled from "styled-components";
import { Text } from "../Text";
import img from "../../assets/hero.png";
import { IoMdClose } from "react-icons/io";

const StyledCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  width: 45rem;
  position: relative;
  margin: 2rem 0 0 0;
`;

const Image = styled.div`
  width: 20rem;
  height: 15rem;
`;

const ItemCount = styled.div`
  border: 1px solid grey;
  border-radius: 0.25rem;
  padding: 0.5rem;
`;

const CartCard = () => {
  return (
    <StyledCard>
      <Image>
        <img src={img} alt="" style={{ width: "100%", height: "100%" }} />
      </Image>
      <Flex noCenter column jc="space-between" p="1rem 2rem">
        <div>
          <Heading Text="Item Name" fs="1.5rem" />
          <Text Text="2 items" fs="1rem" />
        </div>
        <Flex jc="space-between">
          <ItemCount>
            <TiMinus
              style={{
                cursor: "pointer",
              }}
            />
            <span style={{ margin: "0 1.5rem" }}></span>
            <FaPlus
              style={{
                cursor: "pointer",
              }}
            />
          </ItemCount>
          <Heading Text="30" fs="1.5rem" />
        </Flex>
      </Flex>
      <IoMdClose
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          cursor: "pointer",
        }}
      />
    </StyledCard>
  );
};

export default CartCard;
