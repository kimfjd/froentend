// UserRef : 컴포넌트 내부 변수값 쥬지

import { useEffect, useRef } from "react";
const ExComponent = () => {
  const myBtnRef = useRef(null);
  useEffect(() => {
    if (myBtnRef.current) {
      myBtnRef.current.innerText = "클릭하세요";
    }
  }, []);
  // 컴포넌트 내부 변수를 useRef를 사용하여 값을 유지
  const count = useRef(0);

  const handleClick = () => {
    count.current += 1;
    alert(`클릭 횟수: ${count.current}`);
  };
};
export default ExComponent;
