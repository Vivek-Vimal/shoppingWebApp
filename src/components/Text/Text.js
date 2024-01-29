import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  font-size: ${(props) => (props.fs ? props.fs : "18px")};
  color: ${(props) => (props.color ? props.color : "#000000")};
  text-align: ${(props) => (props.center ? "center" : "left")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "0em")};
  line-height: ${(props) => (props.lh ? props.lh : "16px")};
  font-weight: ${(props) => (props.fw ? props.fw : "400")};
  font-family: "Inter", sans-serif;
  margin: ${(props) => (props.m ? props.m : "")};
  text-transform: ${(props) => (props?.transform ? props?.transform : "")};

  &:hover {
    color: ${(props) => (props.hoverColor ? props.hoverColor : null)};
  }

  @media only screen and (max-width: 1200px) {
    font-size: ${(props) => (props.xmsize ? props.xmsize : "20px")};
  }

  @media only screen and (max-width: 1200px) {
    text-align: ${(props) =>
      props.center ? "center" : props.mcenter ? "center" : "left"};
  }

  @media only screen and (max-width: 768px) {
    font-size: ${(props) => (props.msize ? props.msize : "17px")};
  }
`;

const Text = (props) => {
  return <StyledText {...props}>{props.Text ? props.Text : ""}</StyledText>;
};

export default Text;
