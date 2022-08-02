import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../CommonHeader";
const Login = () => {
  let currentDetails = {
    userName: "Athena",
    password: "athena",
  };
  const [currentLoginDetails, setCurrentLoginDetails] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const onLoginChangeHandler = (e) => {
    console.log(e.target.name === "userName");
    if (e.target.name === "userName") {
      setCurrentLoginDetails((prev) => ({
        ...prev,
        userName: e.target.value,
      }));
    } else {
      setCurrentLoginDetails((prev) => ({
        ...prev,
        password: e.target.value,
      }));
    }
  };
  return (
    <div>
      <CommonHeader />
      <form class="blog-form login-from">
        <label htmlFor="useName">
          <b>User Name</b>
        </label>

        <input
          name="userName"
          type="text"
          placeholder="Please enter your user Name"
          onChange={onLoginChangeHandler}
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          name="password"
          type="password"
          placeholder="Please enter your Password"
          onChange={onLoginChangeHandler}
        />
        <button
          class="sub-btn"
          onClick={(e) => {
            e.preventDefault();
            console.log(currentLoginDetails);
            if (
              currentDetails.userName === currentLoginDetails.userName &&
              currentDetails.password === currentLoginDetails.password
            ) {
              navigate("/storyboard", { replace: true });
            }
          }}
        >
          login
        </button>
      </form>
    </div>
  );
};
export default Login;
