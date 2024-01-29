import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineAliwangwang } from "react-icons/ai";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

export const StyledNav = styled.nav`
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

export const NavItem = styled(Link)`
  text-decoration: none;
  @media only screen and (max-width: 768px) {
    margin: 1rem 2rem;
  }
`;

export const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CartNumberDisplay = styled.span`
  position: absolute;
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.5rem;
  background: ${(props) => (props?.path === "/cart" ? "green" : "#EBD96B")};
  padding: 0 0.5rem;
  color: ${(props) => (props?.path === "/cart" ? "#FFF" : "#000")};
`;

const commonCss = `
  width: 2.5rem;
  height: 2.5rem;

  @media only screen and (max-width: 1200px) {
    width: 2rem;
    height: 2rem;
  }
  `;

export const CartIcon = styled(FiShoppingCart)`
  ${commonCss}
`;

export const AccountIcon = styled(RiAccountPinCircleFill)`
  ${commonCss}
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const commonCss2 = `
${commonCss}
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const BurgerIcon = styled(CiMenuBurger)`
  ${commonCss2}
`;

export const CloseIcon = styled(ImCross)`
  ${commonCss2}
  position: absolute;
  z-index: 9999;
  right: 3rem;
  top: 2rem;
`;

export const HomeIcon = styled(AiOutlineAliwangwang)`
  width: 3rem;
  height: 3rem;
  margin: 0 0 0 5rem;

  @media only screen and (max-width: 1200px) {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 0 0 3rem;
  }

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const SideBar = styled.div`
  position: absolute;
  z-index: 999;
  height: 100%;
  width: 100%;
  display: none;
  flex-direction: column;
  background-color: #fff;
  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;
