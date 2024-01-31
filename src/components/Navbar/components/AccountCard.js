import React from "react";
import styled from "styled-components";
import { Text } from "../../Text";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const StyledCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  padding: 1rem;
  position: absolute;
  top: 5rem;
  right: 1rem;
  z-index: 999;

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const AccountCard = (props) => {
  const { onAccount, setIsAccountCard } = props;

  const navigate = useNavigate();

  const onLogout = () => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    toast.success("Logout Successfully");
    setIsAccountCard(() => false);
    navigate("/");
  };

  return (
    <StyledCard>
      <Text
        Text={"Logout(coming soon)"}
        lh="2rem"
        cursor="pointer"
        onClick={onLogout}
      />
      <Text Text="Details" lh="2rem" onClick={onAccount} cursor="pointer" />
    </StyledCard>
  );
};

export default AccountCard;
