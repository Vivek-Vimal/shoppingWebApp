import React from "react";
import styled from "styled-components";

const StyledWidth = styled.section`
  width: ${(props) =>
    props.full ? "100%" : props.width ? props.width : "1400px"};
  height: auto;
  display: flex;
  align-items: ${(props) => (props.Left ? "left" : "center")};
  justify-content: space-between;
  flex-direction: column;
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  background-color: ${(props) => (props?.bg ? props?.bg : "")};
  border-radius: 1.75rem;

  @media only screen and (max-width: 1600px) {
    width: ${(props) => (props.full ? "100%" : "95%")};
  }
  @meia only screen and (max-width: 1400px) {
    width: ${(props) => (props.full ? "100%" : "98%")};
  }
  @media only screen and (max-width: 540px) {
    width: 100%;
    padding: ${(props) => (props.sp ? props.sp : "0 1rem")};
  }
`;
const PageWidth = ({
  children,
  Left,
  full,
  padding,
  margin,
  sp,
  width,
  bg,
}) => {
  return (
    <StyledWidth
      Left={Left}
      full={full}
      padding={padding}
      margin={margin}
      sp={sp}
      width={width}
      bg={bg}
    >
      {children}
    </StyledWidth>
  );
};

export default PageWidth;
