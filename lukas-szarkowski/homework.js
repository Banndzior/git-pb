function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(1974));
console.log(leapyear(1900));
console.log(leapyear(1985));
console.log(leapyear(2000));

function factorial(i) 
{ 

  if (i === 0)
 {
    return 1;
 }
  return i * factorial(i-1);
         
}
console.log(factorial(7));





