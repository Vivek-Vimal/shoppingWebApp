import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  color: ${(props) => (props.color ? props.color : "#000000")};
  font-size: 20px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.075em;
  border: 2px solid #ebd96b;
  border-radius: ${(props) => (props.br ? props.br : "0.5rem")};
  background-color: #ffffff;
  margin: ${(props) => (props.m ? props.m : "")};
  height: ${(props) => (props.height ? props.height : "3rem")};
  width: ${(props) => (props.width ? props.width : "12rem")};

  &::placeholder {
    color: #666666;
    padding: 0 0 0 1rem;
    font-size: 16px;
  }

  &:focus {
    outline: none;
    padding: 0 0 0 1rem;
    &::placeholder {
      color: #666666;
      font-size: 16px;
      padding: 0;
    }
  }
`;

const Input = (props) => {
  return (
    <StyledInput
      {...props}
      placeholder={props.placeholder ? props.placeholder : "placeholder"}
      value={props?.value ? props?.value : ""}
    />
  );
};

export default Input;
