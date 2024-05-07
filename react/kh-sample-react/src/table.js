import { useState, useEffect } from "react";
import "./App.css";

// 배열로 구성된 객체를 전달받아 map으로 화면에 표시하고, 표시된 화면 영역에 이벤트 연결하기
const Table = () => {
  const data = [
    { id: 100, name: "카즈하", age: 21 },
    { id: 200, name: "유나", age: 21 },
    { id: 300, name: "안유진", age: 21 },
  ];
  const [mapData, setMapData] = useState("");

  useEffect(() => {
    setMapData(data);
  }, []);

  const handleTableRowClick = (item) => {
    console.log(item);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
        {mapData &&
          mapData.map((item) => (
            <tr key={item.id} onClick={() => handleTableRowClick(item)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default Table;
