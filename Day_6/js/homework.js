//Write a function kmToMiles(km) — formula km * 0.621.
const kmToMiles = function(km){
  return km*0.621;
}
const result = kmToMiles(52);
console.log(result);

//Write a function gstAmount(price, rate = 18) returning the tax amount.

function gstAmount(price, rate = 18){
  return price* (rate/100);
}
console.log(`Tax amount: ${gstAmount(100)}`);

//Write a function fullName(first, last) returning the full name as one string.
const fullName = (first,last)=> first+" "+last;
console.log(fullName("gouri","menon"));

//Write a function isAdult(age) returning true/false.
function isAdult(age){
  if(age>=18){
    return true;
  }else{
    return false;
  }
}
console.log(isAdult(40));
console.log(isAdult(10));
