// 리엑트에서 배열과 맵: 렌더링에 매우 중요한 역할을 함

const User = (props) => {
  return (
    <>
      <b>{props.user.userName}</b>
      <span>{props.user.email}</span>
      <br />
    </>
  );
};

const UserList = () => {
  const users = [
    {
      id: 100,
      userName: "천지훈",
      email: "1000won@gamil.com",
    },
    {
      id: 200,
      userName: "백마리",
      email: "2000won@gamil.com",
    },
    {
      id: 300,
      userName: "서민혁",
      email: "3000won@gamil.com",
    },
  ];
  return (
    <>
      {users && users.map((user) => <User kwy={user.id} user={user} />)}
      {/* <div>
        <b>{Users[0].userName}</b>
        <span>{Users[0].userName}</span>
      </div>
      <div>
        <b>{Users[1].userName}</b>
        <span>{Users[1].userName}</span>
      </div>
      <div>
        <b>{Users[2].userName}</b>
        <span>{Users[2].userName}</span>
      </div> */}
      {/* <User user={Users[0]} />
      <User user={Users[1]} />
      <User user={Users[2]} /> */}
    </>
  );
};
export default UserList;
