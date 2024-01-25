import React, { useEffect, useState } from "react";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import Flex from "../../components/Styling/Flex";
import { axiosGet } from "../../api/components/GET";
import Spinner from "../../components/Spinner";

const BrandMaster = () => {
  const [brandImg, setBrandImg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axiosGet({ endPoint: "brand" })?.then((res) => {
      setIsLoading(false);
      setBrandImg(res?.data);
    });
  }, []);
  return (
    <PageLayout height="9rem" bg="#EBD96B">
      <PageWidth>
        <Flex wrap jc={isLoading ? "center" : ""}>
          {isLoading ? (
            <Spinner />
          ) : (
            brandImg?.map((img) => (
              <img
                src={img?.url}
                alt=""
                style={{ width: "7.5rem", height: "5rem", margin: "0 2rem" }}
              />
            ))
          )}
        </Flex>
      </PageWidth>
    </PageLayout>
  );
};

export default BrandMaster;
