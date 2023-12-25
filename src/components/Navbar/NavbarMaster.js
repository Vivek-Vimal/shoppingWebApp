import React from "react";
import styled from "styled-components";
import Flex from "../Styling/Flex";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineAliwangwang } from "react-icons/ai";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Heading } from "../Heading";

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
  background: ${(props) => (props?.path === "/cart" ? "green" : "#EBD96B")};
  padding: 0 0.5rem;
  color: ${(props) => (props?.path === "/cart" ? "#FFF" : "#000")};
`;

const Navbar = () => {
  const number = useSelector((count) => count?.cartReducer?.itemCount);
  const itemDisplay = number > 0 ? number : null;

  const path = window.location.pathname;

  return (
    <StyledNav>
      <NavItem to="/home">
        <Flex width="20rem">
          <AiOutlineAliwangwang
            size="3rem"
            style={{ margin: "0 0 0 5rem" }}
            color={path === "/home" ? "green" : "#000"}
          />
          <Heading
            Text="Let's Shop"
            lh="0"
            color={path === "/home" ? "green" : "#000"}
          />
        </Flex>
      </NavItem>

      <Flex width="55rem" jc="space-between">
        <Flex width="25rem" jc="space-between">
          <NavItem
            to="/dashboard"
            style={{ color: path === "/dashboard" ? "green" : "#000" }}
          >
            DASHBOARD
          </NavItem>

          <NavItem
            to="/product"
            style={{ color: path === "/product" ? "green" : "#000" }}
          >
            PRODUCT
          </NavItem>

          <NavItem
            to="/account"
            style={{ color: path === "/account" ? "green" : "#000" }}
          >
            ACCOUNT
          </NavItem>
        </Flex>
        <Flex width="8rem" jc="space-between" m="0 5rem 0 0">
          <Link to="/cart">
            <CartContainer>
              <FiShoppingCart
                size="2.5rem"
                color={path === "/cart" ? "green" : "#000"}
              />
              <CartNumberDisplay path={path}>{itemDisplay}</CartNumberDisplay>
            </CartContainer>
          </Link>
          <RiAccountPinCircleFill size="2.5rem" />
        </Flex>
      </Flex>
    </StyledNav>
  );
};

export default Navbar;
