import React, { useEffect } from "react";
import Flex from "../../../components/Styling/Flex";
import { productData } from "../../../pageComponents/productNewArrival/DummyData";
import { Text } from "../../../components/Text";
import AddCommonCard from "./components/AddCommonCard";
import { useDispatch, useSelector } from "react-redux";
import { category } from "../../../store/action";
import { type } from "../../../constants";

const CommonAdd = (props) => {
  const { toggleButton } = props;
  const dispatch = useDispatch();

  const categoryData = useSelector((state) => state?.categoryReducer);

  useEffect(() => {
    if (toggleButton === type?.category?.key) dispatch(category);
  }, [toggleButton]);

  const commonCardProps = {
    categoryData,
    ...props,
  };

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

      <AddCommonCard {...commonCardProps} />
    </Flex>
  );
};

export default CommonAdd;
