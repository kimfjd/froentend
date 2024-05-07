import "./App.css";
// JSX란? JavaScript에 XML 추가 확장한 문법
// html 태그 사용 시 반드시 닫힘 태그가 존재해야 함
// 컴포넌트가 반환 될때 태그는 한개 이어야 함
// 자바스크립트 코드를 중괄호를 사용해 바인딩 할 수 있음
// 조건부 연산자 : {}내에서 조건부 연산자 사용 가능
// 조건부 렌더링 : && 연산자의 특징을 활용해서 조건에 따라 화면 랜더링

import Grennting from "./Greeting";
import Welcome from "./welcome";
import Section from "./Section";
import MyComponent from "./MyComponent";
import Say from "./say";
import Clock from "./Clock";
import EventPratice from "./EventPratice";
import FruitSelect from "./FruitSelect";
import Table from "./table";
import UserList from "./UserList";
import TodoList from "./TodoList";
import CreateRef from "./Ref";
import HooksCnt from "./Hooks1";
import ExComponent from "./UserRef2";
import Info from "./UeseEffect";
import Counter from "./UseReducer";
import Average from "./UseMemo";
function App() {
  // return <Grennting />;
  return (
    <>
      {/* <Welcome name="김동환" age={26} addr="경기도 이천시" />; */}
      {/* <Section title="스포츠" content="오늘의 프로 야구는 기아가 1등 입니다." />
      <Section title="정치" content="오늘 회담 진행중" />
      <hr />
      <MyComponent name="김동환" age={26} /> */}
      {/* <Say></Say> */}
      {/* <Clock></Clock>
      <useEffect></useEffect> */}
      {/* <EventPratice></EventPratice> */}
      {/* <FruitSelect></FruitSelect> */}
      {/* <Table></Table> */}
      {/* <UserList></UserList> */}
      {/* <TodoList></TodoList> */}
      {/* <CreateRef></CreateRef> */}
      {/* <HooksCnt></HooksCnt> */}
      {/* <Info></Info> */}
      {/* <ExComponent></ExComponent> */}
      {/* <Info></Info> */}
      {/* <Counter></Counter> */}
      <Average></Average>
    </>
  );
}

export default App;
