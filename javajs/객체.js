// 자바 스크립트에서는 원시타입을 제외한 모든 값은 참조 타입 입니다.
// 객체리터럴은 중괄호를 사용해서 만드며, 속성(property)과 값(value)의 쌍으로 구성
const person={
    name:"안유진",
    age:21,
    addr: "서울시 강남구 청담동",
    group:"아이브",
    desc: function(){
        console.log("아이브는여성 5인조 걸그룹 입니다.");
    }
};
console.log(person.name);
console.log(person.age);
console.log(person["addr"]);
console.log(person["group"]);
console.log(person.desc())