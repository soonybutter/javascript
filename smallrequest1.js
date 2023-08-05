function getCircleArea (radius){
    return radius * radius * 3.14;
}
const area = getCircleArea(10);
console.log(`원의 넓이: ${area}`);

function getOrder(arr){
    let result = 0;
    for(let i =0; i < arr.length; i++){
        const currentNumber = arr[i];
        if (result < currentNumber){
            result = currentNumber
        }
    }
    return result;
}
const result = getOrder([10, 20, 100, 34, 50, 22, 67, 78, 23, 54]);
console.log(result);

function getBMI(height, weight){
    const h = height /100 ;
    const bmi =weight / (h * h);
    if ( bmi > 25) return "비만";
    else if (bmi > 24 && bmi <= 25) return "과체중";
    else if (bmi > 18.5 && bmi <= 23) return "정상";
    else return "저체중";
}
const bmi = getBMI (182, 89);
console.log ("bmi: " +bmi);
