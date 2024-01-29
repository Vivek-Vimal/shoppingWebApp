import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Heading } from "../../../components/Heading";
import { Text } from "../../../components/Text";
import { TiStar } from "react-icons/ti";
import Flex from "../../../components/Styling/Flex";
import toast from "react-hot-toast";
import { axiosPost } from "../../../api";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "../../../components/Checkbox";

const StyledSignUp = styled.form`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  position: relative;

  @media only screen and (max-width: 548px) {
    padding: 3rem 1rem 1rem 1rem;
  }
`;

const SignIN = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
  cursor: pointer;
`;

const SignUpIn = (props) => {
  const { isUpIn, setIsUpIn, onClick } = props;

  const navigate = useNavigate();

  const formObj = {
    userName: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(formObj);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isUpIn === "signIn") {
      const { userName, ...newObj } = formObj;
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

  const onCheckboxChange = () => {
    setIsChecked(() => !isChecked);
  };

  const signInUpProps = {
    endPoint: isUpIn === "signIn" ? "auth/signIn" : "auth/signUp",
    payload: formData,
  };

  const handleSubmit = (sub) => {
    sub.preventDefault();
    const userName = isUpIn === "signUp" ? formData?.userName : true;
    if (!userName || !formData?.email || !formData?.password) {
      toast.error("Please fill all the required fields");
    } else {
      setIsLoading(true);
      axiosPost({ ...signInUpProps }).then((res) => {
        setIsLoading(false);
        if (res?.status === 200) {
          toast.success(res?.data?.message);
          if (isUpIn === "signUp") {
            setIsUpIn("signIn");
          } else {
            navigate("/home");
          }
        } else {
          toast.error(res?.response?.data?.message);
        }
      });
    }
  };

  const margin = "0 0 1rem 0";
  const placeholderText = "please enter ";

  return (
    <StyledSignUp onSubmit={handleSubmit}>
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
        m="0 0 2rem 0"
      />

      {isUpIn === "signUp" && (
        <>
          <div style={{ margin: margin }}>
            <Flex>
              <Text Text="User Name" lh="1.5rem" />
              <TiStar />
            </Flex>
            <Input
              name="userName"
              value={formData?.userName}
              placeholder={placeholderText + "user name"}
              width="23rem"
              mWidth="100%"
              onChange={onChange}
            />
          </div>
        </>
      )}

      <div style={{ margin: margin }}>
        <Flex>
          <Text Text="E-Mail" lh="1.5rem" />
          <TiStar />
        </Flex>
        <Input
          name="email"
          value={formData?.email}
          placeholder={placeholderText + "e-mail"}
          width="23rem"
          mWidth="100%"
          onChange={onChange}
        />
      </div>

      <div style={{ margin: margin }}>
        <Flex jc="space-between">
          <Flex>
            <Text Text="Password" lh="1.5rem" />

            <TiStar />
          </Flex>
          <Flex width="5rem">
            <Text transform="capitalize" Text={"Show"} />
            <Checkbox
              id={1}
              name={"showHidePass"}
              value={isChecked}
              onChange={onCheckboxChange}
              width="1rem"
              height="1rem"
              m="0 0 0 1rem"
            />
          </Flex>
        </Flex>
        <Input
          name="password"
          value={formData?.password}
          placeholder={placeholderText + "password"}
          width="23rem"
          mWidth="100%"
          onChange={onChange}
          type={isChecked ? "text" : "password"}
        />
      </div>

      <Button
        text={isUpIn === "signIn" ? "Sign In" : "Sign Up"}
        m="1rem 0 0 0"
        width="100%"
        onClick={onClick}
        isLoading={isLoading}
      />
    </StyledSignUp>
  );
};

export default SignUpIn;
