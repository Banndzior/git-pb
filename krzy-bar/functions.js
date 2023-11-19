// function greet() {
//     console.log("Greetings!")
// }

// greet();

// function doubleNumber(number) {
//     let doubled = number * 2;
//     return doubled;
}
// let result = doubleNumber(3);
// console.log(result);

// let numberToDouble = 10;
// let anotherResult = doubleNumber(numberToDouble);
// console.log(anotherResult);

// function addNumber(numberOne, numberTwo) {
//     return numberOne + numberTwo;

// }
// let sum = addNumber (4,5);
// console.log(sum);
// console.log(addNumber(5));

// function addNumber2(numberOne, numberTwo = 1){
//     return numberOne + numberTwo;
// }
// console.log(addNumber2(4));
// console.log(addNumber2());

function capitalizeAndLog(text){
    text = text[0].toUpperCase() + text.slice(1);
    console.log(text);
}

capitalizeAndLog("capitlize me!");