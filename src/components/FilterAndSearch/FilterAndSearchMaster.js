import React, { useEffect, useState } from "react";
import Flex from "../Styling/Flex";
import { Text } from "../Text";
import { Checkbox } from "../Checkbox";
import { Search } from "../Search";
import { axiosGet } from "../../api/components/GET";
import Spinner from "../Spinner";

const FilterAndSearchMaster = (props) => {
  const { onCheckboxChange } = props;
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axiosGet({ endPoint: "category" })?.then((res) => {
      setCategoryData(res?.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <Flex bs="rgba(0, 0, 0, 0.09) 0px 3px 12px" p="2rem">
      <Flex jc={isLoading ? "center" : ""} wrap>
        {isLoading ? (
          <Spinner />
        ) : (
          categoryData?.map((item, index) => (
            <Flex width="12rem">
              <Text transform="capitalize" Text={item?.title} />

              <Checkbox
                id={index}
                name={item?.title}
                value={index}
                onChange={onCheckboxChange}
              />
            </Flex>
          ))
        )}
      </Flex>
      <Search {...props} />
    </Flex>
  );
};

export default FilterAndSearchMaster;
