let i =3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}
let num = 1;
while (num <= 9999) {
    console.log(num);
    num++;
}
// while 문 : '수행 전' 조건식 평가
do {
    console.log("무조건");
    console.log("한 번은 실행");
}while (false);
// do...while 문 : '수행 후' 조건식 평가

for (let i = 0; i < 5; i++){
    console.log(i);
}
for (let i = 2; i < 10; i++){
    console.log(i);
}

for (let i = 0; i < 2; i++) {
    console.log(`i: ${i}`);
    for( let k = 0; k < 2; k++) {
        console.log(`k: ${k}`);
    }
} // for 문은 중첩해서 사용할 수 있다.

let arr =["banana", "apple", "orange"];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
let obj ={name:"David", age:"20"};
for (let key in obj){
    console.log(key + ":" + obj[key]);
}
let arr1 =["orange", "banana","apple"];
for (let index in arr1){
    console.log(index + ": "+ arr1[index]);
}
let arr2 = ["Harry", "Olivia", "Sam", "Kelly", "Daivd", "Paul", "John", "Bob", "Mia"];
for (let index in arr2){
    console.log(index + ". "+ arr2[index]);
}
for (let i = 0; i < 10; i++){
    console.log(i);
    if(i === 5) break;
} // break 사용해서 바로 종료됨.

let obj1 = {name:"철수", age:20};
for (let key in obj1){
    if (key === "age") break;
    console.log(obj1[key]);
}
// for in 문에서도 break 사용해서 바로 종료.
// 반복문 내부에 break 사용 x , if문으로 처리하는 것이 보편적임.

for (let i = 1; i <= 10; i++){
    if ( i % 2 === 1) continue; // 짝수만 출력
    console.log(i);
}


let sum = 0;
for (let i = 1; i <= 100; i++){
    sum += i;
    console.log(sum);
}
// 1부터 100 까지의 합

let count = 0;
for (let i = 1; i <= 999; i++){
    if ( i % 2 === 0) count++;
}
console.log(`짝수의 개수는 ${count}개다.`);
// 숫자 1부터 999까지 짝수가 몇 개인가?

for (let gugu = 1; gugu < 10; gugu++)
for (let dan = 1; dan < 10; dan++){
    console.log (`${gugu} x ${dan} = ${gugu * dan}`);
}
// 구구단 1단부터 9단까지 한 번에 출력하기.

for (let a = 1; a < 10; a++){
    for (let b = 1; b < 10; b++){
        for (let c = 1; c < 10; c++){
            let sum = (a * a * a) + (b * b * b) + (c * c * c);
            let currentNumber = (a * 100) + (b * 10) + c;
            if (sum === currentNumber){
                console.log(currentNumber);
            }
        
        }
    }
}
// 100에서 999까지 정수 중에서 암스트롱 수에 해당하는 숫자를 모두 출력하기.
// *암스트롱 수 : 세 자리의 정수 중 각 자리의 수를 세제곱한 수의 합과 자신이 같은 수
























