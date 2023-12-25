import React from "react";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import { CartCard, SummaryCard } from "../../components/card";
import Flex from "../../components/Styling/Flex";
import { useSelector, useDispatch } from "react-redux";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { removeItem, incItem, decItem } from "../../store/action";

const CartMaster = () => {
  const cartItem = useSelector((item) => item?.cartReducer?.cart);
  const cartLength = cartItem?.length > 0 ? true : false;

  const dispatch = useDispatch();

  const closeCartCard = (id) => {
    dispatch({ ...removeItem, payload: { id } });
  };

  const onIncDecItem = (props) => {
    dispatch({
      type:
        props?.type === "inc"
          ? incItem?.type
          : props?.type === "dec"
          ? decItem?.type
          : null,
      payload: { id: props?.id },
    });
  };

  const cardProp = {
    closeCartCard,
    onIncDecItem,
  };

  const summaryCardProp = {
    cartItem,
  };

  return (
    <PageLayout
      start={cartLength ? true : false}
      padding={cartLength ? "7rem 0 0 0" : "0"}
    >
      {cartLength && (
        <PageWidth height="6rem">
          <Flex>
            <Heading Text="Checkout" fs="3rem" />
          </Flex>
        </PageWidth>
      )}

      <PageWidth
        direction={cartLength ? "row" : "column"}
        align={cartLength ? "start" : "center"}
        key={cartLength}
        width="1400px"
      >
        {cartLength ? (
          <>
            <Flex column noCenter>
              {cartItem?.map((item) => (
                <CartCard
                  img={item?.image}
                  price={item?.price}
                  title={item?.title}
                  category={item?.category}
                  currentItemCount={item?.currentCount}
                  id={item?.id}
                  {...cardProp}
                />
              ))}
            </Flex>
            <SummaryCard {...summaryCardProp} />
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
