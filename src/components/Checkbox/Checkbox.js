import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;

`;

const Checkbox = () => {
  return <StyledCheckbox type="checkbox" />;
};

export default Checkbox;
