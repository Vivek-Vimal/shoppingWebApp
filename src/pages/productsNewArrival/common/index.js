import React, { useState } from "react";
import { PageLayout } from "../../../components/PageLayout";
import { PageWidth } from "../../../components/Width";
import { Heading } from "../../../components/Heading";
import { Card } from "../../../components/card";
import Flex from "../../../components/Styling/Flex";
import img from "../../../assets/hero.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const CommonProduct = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const modalFun = () => {
    setIsModelOpen(true);
  };

  return (
    <PageLayout>
      <PageWidth>
        <Flex>
          <Heading Text="New Arrivals" />
        </Flex>
        <Flex wrap>
          <Card
            modalFun={modalFun}
            title="Saucage"
            desc="desc worling ...."
            price="30"
            img={img}
          />
          <Modal
            open={isModelOpen}
            onClose={() => setIsModelOpen(false)}
            center
          >
            <h2>Simple centered modal</h2>
          </Modal>
        </Flex>
      </PageWidth>
    </PageLayout>
  );
};

export default CommonProduct;
