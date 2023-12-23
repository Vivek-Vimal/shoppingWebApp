import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "100%")};
  align-items: ${(props) => (props.noCenter ? "flex-start" : "center")};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => (props.jc ? props.jc : "flex-start")};
  margin: ${(props) => (props.m ? props.m : "")};
  flex-wrap: ${(props) => (props?.wrap ? "wrap" : "nowrap")};
  padding: ${(props) => (props?.p ? props?.p : "")};
  height: ${(props) => (props?.height ? props?.height : "")};
  position: ${(props) => (props?.position ? props?.position : "")};
  box-shadow: ${(props) => (props?.bs ? props?.bs : "")};
  overflow-y: ${(props) => (props?.overflowY ? "auto" : "visible")};

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ebd96b;
    border-radius: 20px;
  }

  @media (max-width: 1100px) {
    flex-direction: ${(props) =>
      props.column || props.lcolumn ? "column" : "row"};
    margin: ${(props) =>
      props.m ? props.m : props.sM ? props.sM : ""} !important;
  }

  @media (max-width: 600px) {
    flex-direction: ${(props) =>
      props.column || props.lcolumn || props.mcolumn ? "column" : "row"};
  }

  @media (max-width: 450px) {
    flex-direction: ${(props) =>
      props.column || props.lcolumn || props.mcolumn || props.scolumn
        ? "column"
        : "row"};
  }
`;

const Flex = ({
  children,
  column,
  scolumn,
  jc,
  m,
  mcolumn,
  lcolumn,
  noCenter,
  width,
  sM,
  wrap,
  p,
  height,
  position,
  bs,
  overflowY,
}) => {
  return (
    <StyledFlex
      column={column}
      scolumn={scolumn}
      jc={jc}
      m={m}
      mcolumn={mcolumn}
      lcolumn={lcolumn}
      noCenter={noCenter}
      width={width}
      sM={sM}
      wrap={wrap}
      p={p}
      height={height}
      position={position}
      bs={bs}
      overflowY={overflowY}
    >
      {children}
    </StyledFlex>
  );
};

export default Flex;
