import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  color: ${(props) => (props.color ? props.color : "#000000")};
  font-size: 20px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.075em;
  padding: 0 0 0 1rem;
  border: 2px solid #EBD96B;
  border-radius: ${(props) => (props.br ? props.br : "0.5rem")};
  background-color: #FFFFFF;
  margin: ${(props) => (props.m ? props.m : "")};
  height: ${(props) => (props.height ? props.height : "3rem")};
  width: ${(props) => (props.width ? props.width : "12rem")};

  &:placeholder {
    color: #666666;
  }

  &:focus,
  &:focus {
    outline: none;
  }
`;

const Input = (props) => {
  return (
    <StyledInput
      {...props}
      placeholder={props.placeholder ? props.placeholder : "placeholder"}
    />
  );
};

export default Input;
