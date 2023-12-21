import React, { useEffect, useState } from "react";
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
  const [searchinput, setSearchInput] = useState("");
  const [displayProductData, setDisplayProductData] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState({
    searchButton: false,
    checkboxButton: false,
  });
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const path = window.location.pathname;

  const modalFun = (item) => {
    setIsModelOpen(true);
    setCurrentItem(item);
  };

  const addToCart = (item) => {
    dispatch({ ...addItem, payload: item });
  };

  const onChange = (input) => {
    setSearchInput(input.target.value?.toLowerCase());
  };

  const onSearch = () => {
    if (searchinput) {
      setIsSearchClicked((prev) => ({ ...prev, searchButton: true }));
      const filterData = [];

      displayProductData?.map(
        (item) =>
          item?.title?.toLowerCase()?.includes(searchinput) &&
          filterData?.push(item)
      );

      setDisplayProductData([...filterData]);
    }
  };

  const onCheckboxChange = (props) => {
    setIsSearchClicked((prev) => ({ ...prev, checkboxButton: true }));

    const index = selectedCategory?.findIndex(
      (e) => e?.name === props?.target.name
    );

    if (index > -1) {
      setSelectedCategory((prev) => {
        const updatedArr = [...prev];
        updatedArr[index].isChecked = props?.target.checked;
        return [...updatedArr];
      });
    } else {
      setSelectedCategory((prev) => [
        ...prev,
        {
          //value: props.target.value,
          name: props.target.name,
          isChecked: props.target.checked,
        },
      ]);
    }
  };

  useEffect(() => {
    if (path === "/product") {
      setDisplayProductData([...productData]);
    } else {
      setDisplayProductData(productData?.slice(0, 3));
    }
  }, [path]);

  useEffect(() => {
    if (!searchinput) {
      if (selectedCategory?.find((e) => e?.isChecked)) {
        setDisplayProductData([...filteredData]);
      } else {
        if (isSearchClicked?.searchButton) {
          setDisplayProductData([...productData]);
        }
      }
    }
  }, [searchinput, isSearchClicked]);

  useEffect(() => {
    if (productData?.length > 0) {
      const uniqueCategory = [];

      productData.map((e) =>
        uniqueCategory?.find((i) => i === e?.category)
          ? null
          : uniqueCategory.push(e?.category)
      );

      setCategory([...uniqueCategory]);
    }
  }, [productData]);

  useEffect(() => {
    const index = selectedCategory?.findIndex((e) => e?.isChecked === true);
    const updatedArr = [];
    setSearchInput("");

    if (index > -1) {
      productData?.map((item) =>
        selectedCategory?.find(
          (e) => e?.isChecked && e?.name === item?.category
        )
          ? updatedArr?.push(item)
          : null
      );
      setFilteredData([...updatedArr]);
      setDisplayProductData([...updatedArr]);
    } else if (isSearchClicked?.checkboxButton) {
      setDisplayProductData([...productData]);
    }
  }, [selectedCategory]);

  const searchFilterProps = {
    onSearch,
    onChange,
    category,
    onCheckboxChange,
    searchinput,
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
        {path === "/product" && (
          <FilterAndSearchMaster {...searchFilterProps} />
        )}
        <Flex wrap>
          {displayProductData?.map((item) => (
            <Card
              modalFun={() => modalFun(item)}
              title={item?.title}
              desc={item?.description}
              price={item?.price}
              img={item?.image}
              addToCart={() => addToCart(item)}
              key={item?.id}
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
