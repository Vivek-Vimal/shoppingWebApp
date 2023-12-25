import React from "react";
import Flex from "../Styling/Flex";
import { Text } from "../Text";
import { Checkbox } from "../Checkbox";
import { Search } from "../Search";

const FilterAndSearchMaster = (props) => {
  const { categoryData, onCheckboxChange } = props;
  return (
    <Flex bs="rgba(0, 0, 0, 0.09) 0px 3px 12px" p="2rem">
      <Flex>
        {categoryData?.map((item, index) => (
          <Flex>
            <Text transform="capitalize" Text={item} />

            <Checkbox
              id={index}
              name={item}
              value={index}
              onChange={onCheckboxChange}
            />
          </Flex>
        ))}
      </Flex>
      <Search {...props} />
    </Flex>
  );
};

export default FilterAndSearchMaster;
