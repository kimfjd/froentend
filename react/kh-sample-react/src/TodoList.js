import { useState } from "react";
import "./App.css";

const TodoList = () => {
  const [name, setNames] = useState([
    { id: 1, text: "HTML연습" },
    { id: 2, text: "CSS 복습" },
    { id: 3, text: "자바스크립트 이해" },
    { id: 4, text: "리액트프로젝트" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = name.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = (id) => {
    const nextNames = name.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = name.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <p className="title-name">to do List</p>
      <p>삭제는 해당 항목을 더블클릭 할 것</p>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default TodoList;
