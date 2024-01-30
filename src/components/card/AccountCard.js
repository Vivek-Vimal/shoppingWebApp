import React from "react";
import styled from "styled-components";
import { Text } from "../Text";
import { Heading } from "../Heading";
import Flex from "../Styling/Flex";
import { useWindowDimensions } from "../../hooks";

const StyledCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  padding: 2rem;

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const AccountCard = () => {
  const userInfo = window.localStorage.getItem("user");
  const token = window.localStorage.getItem("token");
  const { width } = useWindowDimensions();

  return (
    <StyledCard>
      <Flex mColumn noCenter>
        <Text Text={"Your_email : "} lh="2rem" />
        <Heading Text={userInfo} lh="2rem" m="0 0 0 0.5rem" sm="0" />
      </Flex>
      <Flex mColumn noCenter m="1rem 0 0 0">
        <Text Text={"Your_Current_Token : "} lh="2rem" />
        <Text
          Text={token?.slice(0, width > 500 ? 25 : 11) + "..."}
          lh="2rem"
          m="0 0 0 0.5rem"
          sm="0"
        />
      </Flex>
    </StyledCard>
  );
};

export default AccountCard;
