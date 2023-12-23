import React from "react";
import Flex from "../../../../components/Styling/Flex";
import { productData } from "../../../productNewArrival/DummyData";
import { Text } from "../../../../components/Text";
import AddCommonCard from "./components/AddCommonCard";

const CommonAdd = (props) => {
  const { toggleButton } = props;
  return (
    <Flex
      height="550px"
      bs="rgba(0, 0, 0, 0.09) 0px 3px 12px;"
      overflowY
      p="0.5rem 2rem"
      wrap
      noCenter
      jc="space-between"
    >
      <div>
        {productData?.map((item) => (
          <Text Text={item?.title} lh="1.5rem" />
        ))}
      </div>

      <AddCommonCard />
    </Flex>
  );
};

export default CommonAdd;
