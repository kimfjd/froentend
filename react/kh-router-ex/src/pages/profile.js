import { useParams } from "react-router-dom";
// useParams : 리액트 라우터에서 URL 파라미터 값을 가져오기 위해 사용되는 훅

const data = {
  frontend: {
    name: "김동환",
    description: "집가고 싶다",
  },
  backend: {
    name: "잠",
    description: "졸려",
  },
  dba: {
    name: "머리아파",
    description: "잠온다",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username]; //키를 넣으면 값이 나옴[키]
  return (
    <>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않은 프로필 입니다.</p>
      )}
    </>
  );
};
export default Profile;
