import React from "react";
import { Button } from "../Button";
import Flex from "../Styling/Flex";

const ButtonGroupMaster = (props) => {
  const { toggleButton, onClick } = props;

  return (
    <Flex {...props}>
      <Button
        dis={toggleButton !== "PR"}
        br="0"
        text="Product"
        onClick={() => onClick("PR")}
      />
      <Button
        dis={toggleButton !== "BR"}
        br="0"
        text="Brand"
        onClick={() => onClick("BR")}
      />
      <Button
        dis={toggleButton !== "SL"}
        br="0"
        text="Slide"
        onClick={() => onClick("SL")}
      />
    </Flex>
  );
};

export default ButtonGroupMaster;
