const age= 20;
const mood=age>=18?'adult':'minor';
console.log(mood);

const username = null;
const display = username ?? 'guest';
console.log(display);

const display2 = username || 'guest';
console.log(display2);