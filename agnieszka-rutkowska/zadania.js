
//From years in array check for leap years [1974, 1900, 1985, 2000]

 let years = [1974, 1900, 1985, 2000];
 let year;
 for (let i = 0; i < years.length; i++) {
   year = years[i];

   if ((year % 100 === 0 || year % 4 === 0) && year % 400 !== 0) {
     console.log(year);
   }
}
//Calculate the sum of the odd items

let tab1= [1,6,23,8,4,98,3,7,3,98,4,98];
let sum = 0;

for( let i = 0; i<tab1.length; i++){



if( tab1[i] % 2 === 0){
sum = sum + tab1[i]
}
}
console.log(sum);

//Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

let tab2= [1,6,23,8,4,98,3,7,3,98,4,98];
let max = 0;
let min = 0;

for( let i = 0; i<tab2.length; i++){
    if(tab2[i]>max){
    max = tab2[i]
    } 
if(i === 0 || tab2[i]<min){
min =tab2[i];
    }
}

console.log(min)
console.log(max)

//Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]

let tab3 = ["Karol", "Adam","Rogowski","Politechnika","Super","Weekend"];
let longestString = "";

for( i = 0; i<tab3.length; i++){

if(tab3[i].length>longestString.length){
    longestString = tab3[i];
}
}
console.log(longestString)

//Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].

let tab4 = [1,6,23,8,4,98,3,7,3,98,4,98];
let highIndex = 0;

for( i = 0; i<tab4.length; i++){
    if(tab4[i]>tab4[highIndex]){
        highIndex = i;
    }
}
        console.log(highIndex)
    
//Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

let tab5 = [1,6,23,8,4,98,3,7,3,98,4,98];
let sum1 = 0;
let sumparzyste = 0;

for (i = 0; i<tab5.length; i++){
    if(tab5[i] % 2 === 0){

    sum1 = sum1 + tab5[i]

    

    }
}
console.log(sum1/tab5.length)

//Calculate average value of items at even indexes. Zero is not considered to be even number. 

let tab6 = [1,6,23,8,4,98,3,7,3,98,4,98];



//With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]

let tab7 = [1,6,23,8,4,98,3,7,3,98,4,98];
let wynik = 0;

for( i = 0; i<tab7.length; i++){

if(tab7[i]% 2 === 0){
    wynik = wynik + tab7[i];
}
else{

    wynik = wynik - tab7[i];
}
}
    console.log(wynik)
