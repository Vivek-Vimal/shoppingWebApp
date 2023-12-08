import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Heading } from "../../../components/Heading";
import { Text } from "../../../components/Text";
import { TiStar } from "react-icons/ti";
import Flex from "../../../components/Styling/Flex";
import toast, { Toaster } from "react-hot-toast";

const StyledSignUp = styled.form`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  position: relative;
`;

const SignIN = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 2rem;
  cursor: pointer;
`;

const SignUpIn = (props) => {
  const { isUpIn, setIsUpIn } = props;

  const formObj = {
    eMail: "",
    phone: "",
    address: "",
    password: "",
  };

  const [formData, setFormData] = useState(formObj);

  useEffect(() => {
    if (isUpIn === "signIn") {
      const { phone, address, ...newObj } = formObj;
      setFormData(newObj);
    } else if (isUpIn === "signUp") {
      setFormData(formObj);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpIn]);

  const onChange = (change) => {
    setFormData((prev) => ({
      ...prev,
      [change.target.name]: change.target.value,
    }));
  };

  const handleSubmit = (sub) => {
    sub.preventDefault();
    if (
      formData?.eMail === "" ||
      formData?.phone === "" ||
      formData?.password === ""
    ) {
      toast.error("Please fill all the required fields");
    }
    console.log(`formData`, formData);
  };

  const margin = "0 0 1rem 0";
  const placeholderText = "please enter ";
  return (
    <StyledSignUp onSubmit={handleSubmit}>
      <Toaster />

      <SignIN
        onClick={() =>
          isUpIn === "signUp" ? setIsUpIn("signIn") : setIsUpIn("signUp")
        }
      >
        <Text
          Text={isUpIn === "signUp" ? "Sign In" : "Sign Up"}
          color="#E5C643"
        />
      </SignIN>

      <Heading
        Text={isUpIn === "signIn" ? "Sign In" : "Sign Up"}
        center
        lh="0"
      />
      <div style={{ margin: margin }}>
        <Flex>
          <Text Text="E-Mail" />
          <TiStar />
        </Flex>
        <Input
          name="eMail"
          value={formData?.eMail}
          placeholder={placeholderText + "e-mail"}
          width="23rem"
          onChange={onChange}
        />
      </div>

      {isUpIn === "signUp" && (
        <>
          <div style={{ margin: margin }}>
            <Flex>
              <Text Text="Phone Number" />
              <TiStar />
            </Flex>
            <Input
              name="phone"
              value={formData?.phone}
              placeholder={placeholderText + "phone no."}
              width="23rem"
              onChange={onChange}
            />
          </div>

          <div style={{ margin: margin }}>
            <Text Text="Address" />
            <Input
              name="address"
              value={formData?.address}
              placeholder={placeholderText + "address"}
              width="23rem"
              onChange={onChange}
            />
          </div>
        </>
      )}

      <div style={{ margin: margin }}>
        <Flex>
          <Text Text="Password" />
          <TiStar />
        </Flex>
        <Input
          name="password"
          value={formData?.password}
          placeholder={placeholderText + "password"}
          width="23rem"
          onChange={onChange}
        />
      </div>

      <Button
        text={isUpIn === "signIn" ? "Sign In" : "Sign Up"}
        m="1rem 0 0 0"
      />
    </StyledSignUp>
  );
};

export default SignUpIn;
