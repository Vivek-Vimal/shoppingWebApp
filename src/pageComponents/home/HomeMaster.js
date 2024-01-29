import React, { useEffect, useState } from "react";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { axiosGet } from "../../api/components/GET";
import Spinner from "../../components/Spinner";
import ImageGallery from "react-image-gallery";
import { useWindowDimensions } from "../../hooks";
import {
  LeftHeroSec,
  RightHeroSec,
  ResponsiveConatiner,
  HeadingConatiner,
} from "./HomeCss";

const HomeMaster = () => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const onClick = () => {
    navigate("/product");
  };

  const [slideImgData, setSlideImgData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [size, setSize] = useState({ width: 600, height: 550 });

  useEffect(() => {
    if (width > 1200) {
      setSize({ width: 600, height: 550 });
    } else if (width < 1200) {
      setSize({ width: 400, height: 450 });
    } else if (width < 900) {
      setSize({ width: 350, height: 375 });
    }
  }, [width]);

  useEffect(() => {
    if (slideImgData?.length) {
      setImages([]);
      slideImgData?.map((img) => {
        setImages((prev) => [
          ...prev,
          {
            _id: img?._id,
            original: img?.url,
            thumbnail: img?.url,
            originalHeight: size?.height,
            originalWidth: size?.width,
          },
        ]);
      });
    }
  }, [slideImgData?.length, size?.width]);

  useEffect(() => {
    setIsLoading(true);
    axiosGet({ endPoint: "slideImg" })?.then((res) => {
      setSlideImgData(res?.data);
      setIsLoading(false);
    });
  }, []);

  const commonCss = {
    fs: "4rem",
    lh: "5rem",
    mlh: "3rem",
    xm: "3rem",
    xsm: "2rem",
    lhMs: "1.25rem",
  };

  return (
    <PageLayout>
      <PageWidth bg="#F4F6F5" boxShadow padding="3rem 0">
        <ResponsiveConatiner>
          <LeftHeroSec>
            <HeadingConatiner>
              <Heading Text="LET'S" {...commonCss} mWidth="4rem" />
              <Heading Text="EXPLORE" {...commonCss} mWidth="6.5rem" />
              <Heading Text="UNIQUE" italic {...commonCss} mWidth="5.5rem" />
              <Heading Text="PRODUCTS" {...commonCss} mWidth="5rem" />
            </HeadingConatiner>

            <Text
              Text="Live for Influential and Innovative fashion!"
              lh="1.5rem"
            />

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
        </ResponsiveConatiner>
      </PageWidth>
    </PageLayout>
  );
};

export default HomeMaster;
