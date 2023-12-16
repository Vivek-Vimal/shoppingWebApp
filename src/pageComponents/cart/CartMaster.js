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
  const cartItem = useSelector((item) => item?.cart);
  const cartLenght = cartItem?.length > 0 ? true : false;

  console.log(`cartItem`, cartItem);

  return (
    <PageLayout
      start={cartLenght ? true : false}
      padding={cartLenght ? "7rem 0 0 0" : "0"}
    >
      {cartLenght && (
        <PageWidth height="6rem">
          <Flex>
            <Heading Text="Checkout" fs="3rem" />
          </Flex>
        </PageWidth>
      )}

      <PageWidth
        direction={cartLenght ? "row" : "column"}
        align={cartLenght ? "start" : "center"}
        width="1200px"
      >
        {cartLenght ? (
          <>
            <Flex column noCenter>
              {cartItem?.map((item) => (
                <CartCard
                  img={item?.image}
                  price={item?.price}
                  title={item?.title}
                  category={item?.category}
                />
              ))}
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
