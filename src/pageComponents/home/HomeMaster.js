import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import styled from "styled-components";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { axiosGet } from "../../api/components/GET";
import Spinner from "../../components/Spinner";
import ImageGallery from "react-image-gallery";

const LeftHeroSec = styled.div``;

const RightHeroSec = styled.div`
  height: 35rem;
  width: 40rem;
  display: ${(props) => (props?.isLoading ? "grid" : "block")};
  place-items: center;
`;

const HomeMaster = () => {
  const navigate = useNavigate();
  const images = [];

  const onClick = () => {
    navigate("/product");
  };

  const [slideImgData, setSlideImgData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  slideImgData?.map((img) => {
    images.push({
      original: img?.url,
      thumbnail: img?.url,
      originalHeight: "550",
      originalWidth: "600",
    });
  });

  useEffect(() => {
    setIsLoading(true);
    axiosGet({ endPoint: "slideImg" })?.then((res) => {
      setSlideImgData(res?.data);
      setIsLoading(false);
    });
  }, []);

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

          <Button text="Shop Now" m="1rem 0 0 0" onClick={onClick} />
        </LeftHeroSec>
        <RightHeroSec isLoading={isLoading}>
          {isLoading ? (
            <Spinner />
          ) : (
            <ImageGallery
              items={images}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay
              slideInterval={2500}
              showBullets
            />
          )}
        </RightHeroSec>
      </PageWidth>
    </PageLayout>
  );
};

export default HomeMaster;
