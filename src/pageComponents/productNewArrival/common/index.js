import React, { useState } from "react";
import { PageLayout } from "../../../components/PageLayout";
import { PageWidth } from "../../../components/Width";
import { Heading } from "../../../components/Heading";
import { Card } from "../../../components/card";
import Flex from "../../../components/Styling/Flex";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/action";
import { DetailCard } from "../../../components/card";
import { FilterAndSearchMaster } from "../../../components/FilterAndSearch";
import { productData } from "../DummyData";

const CommonProduct = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const dispatch = useDispatch();

  let path = window.location.pathname;

  const modalFun = (item) => {
    setIsModelOpen(true);
    setCurrentItem(item);
  };

  const addToCart = (item) => {
    dispatch({ ...addItem, payload: item });
  };

  const displayProductData =
    path === "/product" ? productData : productData?.slice(0, 3);

  return (
    <PageLayout
      start={path === "/product" ? true : false}
      padding={path === "/product" ? "7rem 0 0 0" : "0"}
    >
      <PageWidth>
        <Flex>
          <Heading
            Text={path === "/product" ? "Products" : "New Arrivals"}
            fs="3rem"
          />
        </Flex>
        {path === "/product" && <FilterAndSearchMaster />}
        <Flex wrap>
          {displayProductData?.map((item) => (
            <Card
              modalFun={() => modalFun(item)}
              title={item?.title}
              desc={item?.description}
              price={item?.price}
              img={item?.image}
              addToCart={() => addToCart(item)}
            />
          ))}

          <Modal
            open={isModelOpen}
            onClose={() => setIsModelOpen(false)}
            center
          >
            <DetailCard currentItem={currentItem} />
          </Modal>
        </Flex>
      </PageWidth>
    </PageLayout>
  );
};

export default CommonProduct;
