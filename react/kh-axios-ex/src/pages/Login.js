import { UserContext } from "../context/UserStore";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const context = useContext(UserContext);
  const { setUserId, setPassword } = context;
  const navigate = useNavigate();
  const onClick = () => {
    setUserId("kimfjd");
    setPassword("1234");
    navigate("/home");
  };

  return (
    <>
      <p>여기는 로그인 페이지</p>
      <button onClick={onClick}>로그인 버튼</button>
    </>
  );
};

export default Login;
