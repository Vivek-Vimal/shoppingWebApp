import React from "react";
import Flex from "../Styling/Flex";
import { Text } from "../Text";
import { Checkbox } from "../Checkbox";
import { Search } from "../Search";

const FilterAndSearchMaster = (props) => {
  return (
    <Flex bs="rgba(0, 0, 0, 0.09) 0px 3px 12px" p="2rem">
      <Flex>
        <Flex>
          <Text Text="Latest" />
          <Checkbox />
        </Flex>
        <Flex>
          <Text Text="Price Low to High" />
          <Checkbox />
        </Flex>
        <Flex>
          <Text Text="Price High to Low" />
          <Checkbox />
        </Flex>
      </Flex>
      <Search {...props} />
    </Flex>
  );
};

export default FilterAndSearchMaster;
