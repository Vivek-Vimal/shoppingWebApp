import React from "react";
import styled from "styled-components";
import { Input } from "../../../../../components/Input";
import { Button } from "../../../../../components/Button";
import { Text } from "../../../../../components/Text";
import { Dropdown } from "../../../../../components/Dropdown";

const StyledCard = styled.div`
  display: grid;
  width: 30rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 0.5rem;
  margin: 1rem 0;
  padding: 1.5rem;
`;

const Container = styled.div`
  margin: 0 0 1rem 0;
`;

const AddCommonCard = (props) => {
  const pleaseEnter = "Please Enter ";
  return (
    <StyledCard>
      <Container>
        <Text Text="Image Url" m="0.5rem 0" ls="0.05rem" />
        <Input width="98%" placeholder={pleaseEnter + "Image Url"} />
      </Container>

      <Container>
        <Text Text="Title" m="0.5rem 0" ls="0.05rem" />
        <Input width="98%" placeholder={pleaseEnter + "Image Title"} />
      </Container>

      <Container>
        <Text Text="Description" m="0.5rem 0" ls="0.05rem" />
        <Input width="98%" placeholder={pleaseEnter + "Image Description"} />
      </Container>

      <Container>
        <Text Text="Price" m="0.5rem 0" ls="0.05rem" />
        <Input width="98%" placeholder={pleaseEnter + "Image Price"} />
      </Container>

      <Container>
        <Text Text="Category" m="0.5rem 0" ls="0.05rem" />
        <Dropdown width="100%">
          <option value="javascript" disabled>
            JavaScript
          </option>
          <option value="python">Python</option>
          <option value="c++">C++</option>
          <option value="java" selected>
            Java
          </option>
        </Dropdown>
      </Container>

      <Button text="Add" m="0.5rem 0" />
    </StyledCard>
  );
};

export default AddCommonCard;
