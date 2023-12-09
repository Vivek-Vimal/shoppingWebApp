import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Flex from "../Styling/Flex";
import { FiShoppingCart } from "react-icons/fi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FcIcons8Cup } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.75);
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartNumberDisplay = styled.span`
  position: absolute;
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.5rem;
`;

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const number = useSelector((count) => count?.itemCount);
  const itemDisplay = number > 0 ? number : null;

  return (
    <StyledNav>
      <NavItem to="/" onClick={() => setActiveIndex(0)}>
        <FcIcons8Cup size="3rem" style={{ margin: "0 0 0 5rem" }} />
      </NavItem>

      <Flex width="55rem" jc="space-between">
        <Flex width="25rem" jc="space-between">
          <NavItem
            to="/dashboard"
            onClick={() => setActiveIndex(1)}
            style={{ color: activeIndex === 1 ? "green" : "#000" }}
          >
            DASHBOARD
          </NavItem>

          <NavItem
            to="/product"
            onClick={() => setActiveIndex(2)}
            style={{ color: activeIndex === 2 ? "green" : "#000" }}
          >
            PRODUCT
          </NavItem>

          <NavItem
            to="/account"
            onClick={() => setActiveIndex(3)}
            style={{ color: activeIndex === 3 ? "green" : "#000" }}
          >
            ACCOUNT
          </NavItem>
        </Flex>
        <Flex width="8rem" jc="space-between" m="0 5rem 0 0">
          <CartContainer>
            <FiShoppingCart size="2.5rem" />
            <CartNumberDisplay>{itemDisplay}</CartNumberDisplay>
          </CartContainer>
          <RiAccountPinCircleFill size="2.5rem" />
        </Flex>
      </Flex>
    </StyledNav>
  );
};

export default Navbar;
