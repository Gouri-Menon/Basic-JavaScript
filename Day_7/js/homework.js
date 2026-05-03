/*Given an array of names ["Priya", "Aarav", "Riya"], use map to make a new array of greetings: "Hello, Priya", etc.*/

const names = ["Priya", "Aarav", "Riya"];
const greetings = names.map(n => `Hello, ${n}`);
console.log(greetings);

/*Filter an array of numbers to only the even ones, then use reduce to sum them.*/

const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNums = numbers.filter(n => n%2==0);
console.log(evenNums);

const sum = evenNums.reduce((a,n) =>a +n, 0);
console.log(sum);

/*Given [3, 1, 4, 1, 5, 9, 2, 6], find the max using both Math.max(...arr) and reduce.*/

const array = [3, 1, 4, 1, 5, 9, 2, 6];
const maxArray = Math.max(...array);
console.log(maxArray);

const redArray = array.reduce((a,n)=> a>n ? a : n, -Infinity);
console.log(redArray);

/*Take any array and write a function that returns its average (sum / length).*/

const arrayNew = [3, 1, 4, 1, 5, 9, 2, 6];
function avgValue(arrayNew){
    const sum = arrayNew.reduce((a,n) => a+n, 0);
    return sum/arrayNew.length;
}
console.log(avgValue(arrayNew));