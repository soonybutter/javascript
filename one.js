let string1 = "Hello, World !";
console.log(string1);

let string2 = '문자열' + '연결 연산자';
console.log(string2); 

let string3 = '문자열은 큰따옴표(")나' +"작은 따옴표(')로 감싸면 된다."; 
console.log(string3);
// 서로 반대로 사용하면 됨.

let string4 = '문자열은 큰따옴표(")나 작은따옴표 (\')로 감싸면 된다.';
console.log(string4);
// 역 슬래시 (\)를 붙이면 순수한 문자로 인식함.

let string5 = "이스케이프 문자를 이용해서\n줄 바꿈하고 싶어요";
console.log(string5);
// \n : 줄 바꿈

let string6 = `문자열은 큰 따옴표(")나 
작은 따옴표(')로 감싸면 된다.`
console.log(string6);

let gugu = 4;
let dan = 32;
let string7 = `${gugu} 곱하기 ${dan}은 ${gugu * dan}이다.`
console.log(string7);

let num1 = 10;
let num2 = 0.1;
console.log(num1);
console.log(num2);

let sum = 0.1 +0.2;
console.log(sum);
// 0.3이 아닌 값이 출력됨, 실수를 계산하는 프로그램을 만들 때 이 점을 고려해야 함 .

let boolean1 = true;
let boolean2 = false;
console.log(boolean1);
console.log(boolean2);
// 논리형 : 오직 ture 와 false 두 값만 있음. boolean은 참이나 거짓을 나타내는 값 

let boolean3 = 10 < 20;
let boolean4 = 10 > 20;
console.log(boolean3);
console.log(boolean4);

let empty1;
console.log(empty1);
// 자바스크립트의 undefined는 사용자가 임의로 정의하고 할당하는 자료형이 아님.

let empty2 = null;
console.log(empty2);
// null 은 변수나 상수를 선언하고, 의도적으로 선언한 공간을 비워 둘 때 할당함.


let studentScore = [80, 70, 90, 60]; 
console.log(studentScore[1]);
console.log(studentScore);
// 국어, 영어, 수학, 과학 점수


let array1 = ['abc, 10, true, undefined, null, [], {}, function(){}'];
console.log(array1);
// 숫자형 외에도 자바스크립트의 모든 자료형을 정의할 수 있음.

let array2 = [];
console.log(array2);
// 비어있는 배열을 정의 할 수 있음. ( 나중에 데이터를 동적으로 추가하려고 할당함, '빈 배열')


let studentScore1 = {
    koreanScore: 80,
    englishScore: 70,
    mathScore: 90,
    scienceScore: 60 
};
console.log(studentScore1.koreanScore);
console.log(studentScore1['englishScore']);
/* 객체 리터럴은 배열처럼 여러 값을 하나로 묶을 수 있지만, 
배열과 달리 값을 '키'로 구분한다. -> 값을 바로 파악 할 수 있음. */










