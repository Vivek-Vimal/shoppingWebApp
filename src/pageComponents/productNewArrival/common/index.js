import React, { useState } from "react";
import { PageLayout } from "../../../components/PageLayout";
import { PageWidth } from "../../../components/Width";
import { Heading } from "../../../components/Heading";
import { Card } from "../../../components/card";
import Flex from "../../../components/Styling/Flex";
import img from "../../../assets/hero.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/action";
import { DetailCard } from "../../../components/card";
import { FilterAndSearchMaster } from "../../../components/FilterAndSearch";

const CommonProduct = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();

  let path = window.location.pathname;

  const modalFun = () => {
    setIsModelOpen(true);
  };

  const addToCart = () => {
    dispatch({ ...addItem, payload: 123 });
  };

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
          <Card
            modalFun={modalFun}
            title="Saucage"
            desc="desc worling ...."
            price="30"
            img={img}
            addToCart={addToCart}
          />
          <Modal
            open={isModelOpen}
            onClose={() => setIsModelOpen(false)}
            center
          >
            <DetailCard />
          </Modal>
        </Flex>
      </PageWidth>
    </PageLayout>
  );
};

export default CommonProduct;