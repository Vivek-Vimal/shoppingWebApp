import React from "react";
import { NavItem } from "./NavbarCss";

const MenuContainer = () => {
  const path = window.location.pathname;
  return (
    <>
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
    </>
  );
};

export default MenuContainer;
