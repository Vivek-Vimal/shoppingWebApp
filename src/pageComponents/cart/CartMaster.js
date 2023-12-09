import React from "react";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import { CartCard, SummaryCard } from "../../components/card";
import Flex from "../../components/Styling/Flex";

const CartMaster = () => {
  return (
    <PageLayout>
      <PageWidth direction="row" align="start">
        <Flex column noCenter>
          <CartCard />
        </Flex>
        <SummaryCard />
      </PageWidth>
    </PageLayout>
  );
};

export default CartMaster;
