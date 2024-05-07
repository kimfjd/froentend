let=bug1,duger1,duger2,duger3,drk1,drk,drk2,chbug,chdrk
bug1=prompt("버거 가격 입력 : ", "");
buger1=Number(bug1);
bug1=prompt("버거 가격 입력 : ", "");
buger2=Number(bug1);
bug1=prompt("버거 가격 입력 : ", "");
buger3=Number(bug1);
drk=prompt("음료 가격 입력 :","");
drk1=Number(drk);
drk=prompt("음료 가격 입력 :","");
drk2=Number(drk);

if(buger1<buger2&&buger1<buger3){
    chbug=buger1;
}else if(buger2<buger1&&buger2<buger3){
    chbug=buger2;
}else{
    chbug=buger3;
}
if(drk1<drk2){
    chdrk=drk1;
}else{
    chdrk=drk2;
}
console.log(chbug+chdrk-50);