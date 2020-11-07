// 1)	From years in array check for leap years [1974, 1900, 1985, 2000]
// let years = [1974, 1900, 1985, 2000];
// let year; 
// for (let i = 0; i < years.length; i++) {
//     year = years[i];

// if ((year % 100 === 0 || year % 4 === 0) && year % 400 !== 0) {
//     console.log(year);
// }
// }

// 2)	Calculate factorial of 7.

// let factorial = [1,2,3,4,5,6,7]
// let output = 1; 
// for (let i = 0; i < factorial.length; i++) { 
//     output = output * factorial[i]; 

// }
// console.log("factorial of 7 is: ", output);

// let factorial = 1;
// let output = 1; 
// for (let i = 1; i <= 7; i++) { 
//     output = output * i; 
    
// }
// console.log("factorial of 7 is: ", output);

// 3)	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

// let val1 = [1,6,23,8,4,98,3,7,3,98,4,98];

// let sum = 0;

// for (let i = 0; i < val1.length; i++) {

// if ((val1[i] % 2) === 0) {

//     continue;} 
//     else {
//         sum = sum + val1[i];
//     }   
// }
// console.log(sum);

// 4)	Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

// let array1 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let minimum = Math.min.apply(null, array1);
// console.log("minimum array value: ", minimum);
// let maximum = Math.max.apply(null, array1);
// console.log("maximum array value ", maximum);

// 5)	Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. 

// let array2 = ["Karol", "Adam","Rogowski","Politechnika","Super","Weekend"];
// for (i = 0; i < array2.length; i++) {

// }

// 6)	Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].

// let array3 = [1,6,23,8,4,98,3,7,3,98,4,98];

// for (let i = 0; i < array3.length; i++) {

//     if ( i === array3.indexOf(Math.max(...array3)))  {

//         console.log(array3.indexOf(array3[i]));
//             }
//     }
// array3.splice(0, 6, 1, 1, 1, 1, 1, 1);
// console.log(array3.indexOf(Math.max(...array3)))
// array3.splice(0, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
// console.log(array3.indexOf(Math.max(...array3)))


// 7)	Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98];


// let val1 = [1,6,23,8,4,98,3,7,3,98,4,98];

// let sum = 0;
// let q = 0;

// for (let i = 0; i < val1.length; i++) {

// if ((val1[i] % 2) > 0) {

//     continue;} 
//     else {
//         sum = sum + val1[i];
//         q = q+1;
//     }   
// }
// console.log("Average of even elements of an array is: ", sum / q);

// 8)	Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

// let array4 = [1,6,23,8,4,98,3,7,3,98,4,98];

// let sum = 0;
// let q = 0;

// for (let i = 1; i < array4.length; i++) {

// if ((array4.indexOf(array4[i] , 1) % 2) > 0 ) {

//     continue;} 
//     else {
//         sum = sum + array4[i];
//         q = q+1;
//     }   
// }
// console.log("Average value of items at even indexes is: ", sum / q);

// 9)	With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]


// let array5 = [1,6,23,8,4,98,3,7,3,98,4,98];

// let even = 0;
// let odd = 0;

// for (let i = 0; i < array5.length; i++) {

// if ((array5[i] % 2) === 0 ) {

//     even = even + array5[i];} 
//     else {
//         odd = odd + array5[i];
    
//     }   
// }
// console.log("Sum of even elements substracted by odd ones: ", even - odd);





  













