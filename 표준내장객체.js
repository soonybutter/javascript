//string 객체
const pw = "124";
if (pw.length < 4){
    console.log( "비밀번호는 최소 4자리 이상 입력해주세요.");
}
// length 속성 : 문자열의 길이 (최대 , 최소 글자 수 제한 ! )

const email ="test!naver.com";
if (email.includes("@") === false) {
    console.log( "올바른 이메일 형식이 아닙니다.");
}
// 특정 문자열이 포함되어 있는지 확인할 때 incluse() 메서드 사용 
// indexOf() 메서드도 사용 가능함

const email1 = "test!naver.com";
if (email.indexOf("@") === -1){
    console.log("올바른 이메일 형식이 아닙니다.");
}

const email2 = "abcdefg";
if (email2.toUpperCase(email2)){
    console.log(email2.toUpperCase());
}
//  객체를 대문자로 표기함. ABCDEFG


// array 객체
const arr =[10, 20, 30];
for (let i = 0; i < arr.length; i++){
    console.log (arr[i]);
} // array 객체에서도 length 사용 ㅇ


//파괴적 메서드
const arr1 = [10, 20, 30, 40];
arr1.push(50); // 배열 맨 뒤에 50 추가
console.log(arr1);  // [ 10, 20, 30, 40, 50]
arr1.pop();  // 배열 맨 뒤에서 요소 추출
console.log(arr1); // [ 10, 20, 30, 40]
arr1. unshift(5); // 배열 맨 앞에 5를 추가함
console.log(arr1);  // [ 5, 10, 20, 30, 40 ]
arr1. shift();  // 배열 맨 앞에서 요소 추출함
console.log(arr1);  // [10, 20, 30, 40]


//비파괴적 메서드
const arr2 = [10, 20, 30,40 ];
arr.forEach(function(v){
    console.log(v);
});
console.log(arr2); // [10, 20, 30, 40] , 그대로 보존함(콜백 함수 호출)

// date 객체
const date = new Date(); 
console.log(date); // 2023-08-08T05:35:41.098Z

const date1 = new Date(2023, 8, 6);  // 8월 아니고 9월임 ! 6일 아니고 5일임 ! (1월, 1일 은 '0'부터 count)
console.log(date1);  // 2023-09-05T15:00:00.000Z

const date2 = new Date(2023, 8, 5);
console.log(date2);  //2023-09-04T15:00:00.000Z

const date3 = new Date(2023, 8, 8, 4, 40, 50);
const dateFormat = `${date.getFullYear()}- ${date.getMonth()+1} - ${date.getDate()}
${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
console.log(dateFormat);  // 2023- 8 - 8 14 : 40 : 17

const date4 = new Date(). getTime();
console.log(date4);  //1691310472641 (코드 실행 시간에 따라 달라짐)

// getTime() : 이후의 시간을 밀리초 단위로 반환함.

const date5 = new Date('2023-8-4');
const date6 = new Date('2023-8-6');
const dateDiff = date6.getTime() - date5.getTime();
const interval = dateDiff / (24 * 60 * 60 *1000);   // 24시간 60분 60초 1000밀리초
console.log(`두 날짜의 차이는 ${interval}일입니다.`);  //두 날짜의 차이는 2일입니다.

//Math 객체
const floatNum = 10.52;
Math.floor(floatNum);
console.log(Math.floor(floatNum)); //10 , '내림'
Math.ceil(floatNum);
console.log(Math.ceil(floatNum));  //11 , '올림'
Math.round(floatNum);
console.log(Math.round(floatNum)); //11 . '반올림'

const random = Math.random();
console.log(random);  // 0이상 1미만의 난수 변환 (랜덤)

function getMaxRandom(max){
    return Math.floor(Math.random() * max) +1;
}
const maxRandom1 = getMaxRandom(20);
console.log(maxRandom1);  // 0이상 20 이하의 랜덤 정수


function getMinMaxRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + 1 + min;
}
const maxRandom2 = getMinMaxRandom(10, 20);
console.log(maxRandom2);  // 10 이상 20 이하의 무작위 정수



















