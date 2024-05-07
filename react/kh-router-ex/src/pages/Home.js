import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>여기가 홈</h1>
      <p>가장 먼저 보이는 페이지</p>
      <Link to="/about">소개 페이지로 이동</Link>
      <p>
        <Link to="/profiles/frontend">frontend 프로필 보기</Link>
      </p>
      <p>
        <Link to="/profiles/backend">backend 프로필 보기</Link>
      </p>
      <p>
        <Link to="/profiles/dba">DBA 프로필 보기</Link>
      </p>
      <p>
        <Link to="/age/20">나이 전달 하기</Link>
      </p>
      <p>
        <Link to="/Articles">게시판 목록</Link>
      </p>
    </>
  );
};
export default Home;
