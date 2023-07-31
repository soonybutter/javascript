let sum = 10 + 20;
console.log(sum); 

let sub = 20 - 10;
console.log(sub);

let multi = 10 * 2;
console.log(multi);  // 곱하기

let div = 10 / 2;
console.log(div); 

let remain = 10 % 3;
console.log(remain);

let expon = 2 ** 3;
console.log(expon);  // 제곱

let increment = 10;
increment++;         // 1 증가
let decrement = 10;
decrement--;         // 1 감소   (두 가지 모두 '후치 연산')
console.log(increment);
console.log(decrement);
// 단항 산술 연산자 : 변수, 상수에 할당된 데이터로만 연산 가능 . 숫자에 바로 적용 x

let num = 10;
let subNum = ++num;  // 앞에 사용했으므로 '전치 연산'
console.log(subNum);

let num1 = -10;
num1 = -num1;
console.log(num1);  //10
// 단항 부정 연산자 : 피연산자 앞에 위치, 피연산자의 부호를 부정하는 연산 수행함.(음수 <-> 양수 변환)

let x = 10;
x += 5; // 15(x = x + 5)

let y = 10;
y -= 5; // 5(y = y - 5)

let z = 10;
z *= 5; // 50(z = z * 5)

let u = 10;
u /= 5; // 2(u = u / 5)

let v = 10;
v %= 3; // 1(v = v % 3)

let t = 10;
t **= 2; // 100(t = t ** 2)
// 복합 대입 연산자 = 산술 연산자와 대입 연산자를 함께 사용, 산술과 할당을 한 번에 수행함.


10 == '10';     // true
10 === '10';    // false
10 != '10';    // false (아니, 똑같아)
10 !== '10';   // true  (응, 달라)
10 < 10;   // false
10 <= 10;  // true
10 > 10;   // false
10 >= 10;  // true


true && true; // true  '논리 연산자 : 조건에 맞는 피연산자를 반환하는 연산 수행함.'
true && false && true; // false

"" && "cat"; // ""
undefined && "cat"; // undefined
0 && "cat"; // 0
null && "cat"; // null


!false;  // true
! (10 < 20);  //false
! (10 < 20 && 20 < 10);  //true

let score = 90;
let grade = score >= 90 ? 'A+' : 'B';
console.log(grade);

let score1 = 50;
let grade1 = score1 < 70? 'Fail' : 'Pass'
console.log(grade1);

let sum1 = 10 + 20 * 3;
console.log(sum1);  //  70 , '20 * 3' 먼저 계산됨.(곱셈이 덧셈과 뺄셈보다 연산자 우선순위 높음.)

let sum2 = (10 + 20) * 3;
console.log(sum2);  // 90 

let num2 = 10;
let result = num2 *= 3;
console.log(result);  // 30 

const result1 = 10 + "10";
console.log(result1);  // 1010 -> 내부적으로 숫자형 데이터를 문자열 데이터로 형 변환했기 때문

let num3 = 10;
let strNum = '10';   // 'String() 메서드'를 사용하여 문자열 -> 숫자형으로 명시적 형 변환
if(num3 === strNum) {
    console.log(`equals`);
}
const result2 = 10 +  "10";
console.log(result2);













































