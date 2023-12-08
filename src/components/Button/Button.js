import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Spinner from "../Spinner";

const StyledButton = styled(motion.button)`
  color: ${(props) => (props.color ? props.color : "#242323")};
  font-size: ${(props) =>
    props.nav ? "18px" : props.fontSize ? props.fontSize : "20px"};
  font-weight: ${(props) => (props.fw ? props.fw : "700")};
  line-height: ${(props) => (props.noLineHeight ? "1" : "24.3px")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "0em")};
  padding: ${(props) =>
    props.nav ? "2px" : props.padding ? props.padding : "0.85rem 2rem"};
  border-radius: ${(props) => (props.br ? props.br : "4px")};
  border: ${(props) => (props.lightBorder ? "1.2px solid #FFFFFF" : "none")};
  cursor: pointer;
  min-width: ${(props) =>
    props.width ? props.width : props.navWidth ? props.navWidth : "15rem"};
  background: ${(props) => (props.bg ? props.bg : "#EBD96B")};
  margin: ${(props) => (props.m ? props.m : "")};
  font-family: "Montserrat", sans-serif;
  height: ${(props) => (props.height ? props.height : "")};

  @media (max-width: 768px) {
    max-width: ${(props) =>
      props.navSmall
        ? props.navSmall
        : props.navWidth
        ? props.navWidth
        : "15rem"};
    font-size: ${(props) =>
      props.nav ? "9px" : props.fontSize ? props.fontSize : "12px"};
  }

  @media (max-width: 450px) {
    margin: ${(props) => (props.sm ? props.sm : "")};
  }
`;

const Button = (props) => {
  const { onClick = () => {} } = props;

  // const renderContent = () => {

  //     if (props.isLoading) {
  //         return <Spinner/>
  //     }

  //     return props.Text
  // }

  return (
    <StyledButton
      onClick={() => {
        onClick();
      }}
      {...props}
      type="submit"
      style={{
        opacity: props.disabled ? 0.3 : 1,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.75 }}
    >
      {
        // renderContent()
        props?.text ? props.text : "text"
      }
    </StyledButton>
  );
};

export default Button;
