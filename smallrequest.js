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