import React from "react";
import styled from "styled-components";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { Dropdown } from "../../../../components/Dropdown";
import { Heading } from "../../../../components/Heading";
import { type } from "../../../../constants";
import { Line } from "../../../../components/Line";

const StyledCard = styled.div`
  width: 30rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 0.5rem;
  margin: 1rem 0;
  padding: 1rem 2rem;
`;

const Container = styled.div`
  margin: 0 0 1rem 0;
`;

const AddCommonCard = (props) => {
  const { toggleButton, categoryData } = props;
  const pleaseEnter = "Please Enter ";
  let title = "";
  switch (toggleButton) {
    case type?.product?.key:
      title = "Add Product";
      break;
    case type?.brand?.key:
      title = "Add Brand Image";
      break;
    case type?.category?.key:
      title = "Add Category";
      break;
    case type?.slide?.key:
      title = "Add Slide Image";
      break;
    default:
      title = "Add";
  }
  return (
    <StyledCard>
      <Heading Text={title} lh="0" />
      <Line m="0 0 1.5rem 0" width="100%" />
      {toggleButton !== type?.category?.key && (
        <Container>
          <Text Text="Image Url" m="0.5rem 0" ls="0.05rem" />
          <Input width="96%" placeholder={pleaseEnter + "Image Url"} />
        </Container>
      )}

      {(toggleButton === type?.product?.key ||
        toggleButton === type?.category?.key) && (
        <Container>
          <Text Text="Title" m="0.5rem 0" ls="0.05rem" />
          <Input width="96%" placeholder={pleaseEnter + "Title"} />
        </Container>
      )}

      {toggleButton === type?.product?.key && (
        <>
          <Container>
            <Text Text="Description" m="0.5rem 0" ls="0.05rem" />
            <Input width="96%" placeholder={pleaseEnter + "Description"} />
          </Container>

          <Container>
            <Text Text="Price" m="0.5rem 0" ls="0.05rem" />
            <Input width="96%" placeholder={pleaseEnter + "Price"} />
          </Container>

          <Container>
            <Text Text="Category" m="0.5rem 0" ls="0.05rem" />
            <Dropdown width="100%">
              {categoryData?.map((item) => (
                <option value="javascript">{item}</option>
              ))}
            </Dropdown>
          </Container>
        </>
      )}

      <Button text="Add" m="0.5rem 0" width="100%" />
    </StyledCard>
  );
};

export default AddCommonCard;
