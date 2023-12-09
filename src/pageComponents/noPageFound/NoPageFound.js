import React from "react";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import { Heading } from "../../components/Heading";

const NoPageFound = () => {
  return (
    <PageLayout>
      <PageWidth>
        <Heading Text="No Page Found" />
      </PageWidth>
    </PageLayout>
  );
};

export default NoPageFound;
