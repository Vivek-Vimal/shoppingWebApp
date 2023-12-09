import React from "react";
import { Navbar } from "../../components/Navbar";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import heroImg from "../../assets/hero.png";
import styled from "styled-components";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";

const LeftHeroSec = styled.div``;

const RightHeroSec = styled.div`
  height: 35rem;
  width: 40rem;
  position: relative;
`;

const HomeMaster = () => {
  return (
    <PageLayout>
      <Navbar />
      <PageWidth
        bg="#F4F6F5"
        boxShadow
        direction="row"
        jc="space-around"
        padding="3rem 0"
      >
        <LeftHeroSec>
          <Heading Text="LET'S" fs="4rem" lh="0.75rem" />
          <Heading Text="EXPLORE" fs="4rem" lh="0.75rem" />
          <Heading Text="UNIQUE" italic fs="4rem" lh="0.75rem" />
          <Heading Text="PRODUCTS" fs="4rem" lh="0.75rem" />

          <Text Text="Live for Influential and Innovative fashion!" />
          <Link to="/product">
            <Button text="Shop Now" m="1rem 0 0 0" />
          </Link>
        </LeftHeroSec>
        <RightHeroSec>
          <Carousel cellAlign="center" style={{ borderRadius: "1rem" }}>
            <img
              src={heroImg}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <img
              src={heroImg}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <img
              src={heroImg}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Carousel>
        </RightHeroSec>
      </PageWidth>
    </PageLayout>
  );
};

export default HomeMaster;
