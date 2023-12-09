import React from "react";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import { CartCard, SummaryCard } from "../../components/card";
import Flex from "../../components/Styling/Flex";
import { useSelector } from "react-redux";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

const CartMaster = () => {
  const cartItem = useSelector((item) => item?.cart?.length);

  return (
    <PageLayout>
      <PageWidth
        direction={cartItem > 0 ? "row" : "column"}
        align={cartItem > 0 ? "start" : "center"}
      >
        {cartItem > 0 ? (
          <>
            <Flex column noCenter>
              <CartCard />
            </Flex>
            <SummaryCard />
          </>
        ) : (
          <>
            <Heading Text="No Product in the cart" center />
            <Link to="/product">
              <Button text="Continue Shopping" />
            </Link>
          </>
        )}
      </PageWidth>
    </PageLayout>
  );
};

export default CartMaster;
