import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
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
  min-width: ${(props) => (props.width ? props.width : "15rem")};
  background: ${(props) => (props.bg ? props.bg : "#EBD96B")};
  margin: ${(props) => (props.m ? props.m : "")};
  font-family: "Montserrat", sans-serif;
  height: ${(props) => (props.height ? props.height : "")};
  z-index: 6;

`;

const Button = (props) => {
  const { onClick = () => {} } = props;

  return (
    <StyledButton
      onClick={onClick}
      {...props}
      type="submit"
      style={{
        opacity: props.dis ? 0.3 : 1,
      }}
    >
      {props?.text ? props.text : "button"}
    </StyledButton>
  );
};

export default Button;
