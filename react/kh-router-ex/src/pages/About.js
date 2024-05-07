import { Navigate, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const id = localStorage.getItem("ID");
  if (id !== "kimfjaaad") {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <>
      <h1>여기는 소개페이지</h1>
      <p>리액트 라우터 사용하기</p>
      <p>쿼리스트링: {location.search} </p>
    </>
  );
};
export default About;
