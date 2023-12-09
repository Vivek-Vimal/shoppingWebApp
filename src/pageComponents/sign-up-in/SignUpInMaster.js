import React, { useState } from "react";
import { PageLayout } from "../../components/PageLayout";
import { PageWidth } from "../../components/Width";
import SignUpIn from "./common";
import img from "../../assets/Background.png";

const SignUpInMaster = () => {
  const [isUpIn, setIsUpIn] = useState("signUp");

  const signUpInProps = {
    isUpIn,
    setIsUpIn,
  };

  return (
    <PageLayout img={img}>
      <PageWidth>
        <SignUpIn {...signUpInProps} />
      </PageWidth>
    </PageLayout>
  );
};

export default SignUpInMaster;
