import React from "react";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import img from "../../assets/b1.png";
import Flex from "../../components/Styling/Flex";

const BrandMaster = () => {
  return (
    <PageLayout height="9rem" bg="#EBD96B">
      <PageWidth>
        <Flex wrap>
          <img src={img} alt="" style={{ width: "7.5rem", height: "5rem" }} />
        </Flex>
      </PageWidth>
    </PageLayout>
  );
};

export default BrandMaster;
