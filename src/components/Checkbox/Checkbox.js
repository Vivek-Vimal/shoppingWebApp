import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;

const Checkbox = (props) => {
  const { id, name, value, onChange } = props;
  return (
    <StyledCheckbox
      type="checkbox"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Checkbox;
