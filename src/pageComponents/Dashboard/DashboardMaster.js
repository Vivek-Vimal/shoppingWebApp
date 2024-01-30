import React, { useState } from "react";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import { ButtonGroup } from "../../components/ButtonGroup";
import { CommonAdd } from "./common";
import { Heading } from "../../components/Heading";

const DashboardMaster = () => {
  const [toggleButton, setToggleButton] = useState("PR");

  const onClick = (type) => {
    setToggleButton(type);
  };

  const buttonGroupProps = {
    toggleButton,
    setToggleButton,
    onClick,
  };

  return (
    <PageLayout start>
      <PageWidth width="1600px">
        <Heading Text="Welcome User Admin" width="100%" lh="4rem" />
        <ButtonGroup {...buttonGroupProps} m="1rem 0 2rem 0" />
        <CommonAdd toggleButton={toggleButton} />
      </PageWidth>
    </PageLayout>
  );
};

export default DashboardMaster;
