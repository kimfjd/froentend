//클로저란? 함수가 해당 함수의 스코프 외부에 있는 변수에 접근 할 수 있는 메커니즘
function Counter(){
    let count=0;
    return{
        increment: function(){
            count++;
            console.log(conut);
        },
        decrement: function(){
            count--;
            console.log(count);
        }
    }
};
const myCounter=Counter();

myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();

console.log(myCounter.count);