import React from "react";
import styled from "styled-components";

const StyledPageLayout = styled.section`
  width: 100%;
  min-height: ${(props) => (props.height ? props.height : "100vh")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.start ? "flex-start" : "center")};
  flex-direction: column;
  padding: ${(props) => (props.padding ? props.padding : "0")};
  background: ${(props) => (props.bg ? props.bg : "#FFFFFF")};
  background-image: url(${(props) => (props?.img ? props?.img : "")});
  background-position: 0 10vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow-x: hidden;
  margin: ${(props) => (props?.m ? props?.m : "")};
`;

const PageLayout = ({ children, bg, start, padding, img, height, m }) => {
  return (
    <StyledPageLayout
      bg={bg}
      padding={padding}
      start={start}
      img={img}
      height={height}
      m={m}
    >
      {children}
    </StyledPageLayout>
  );
};

export default PageLayout;
