
let a = 5, b ="5", c = 10;
console.log( (a==b || a === c) && !(b ===c ) ); //True

let x = undefined;
console.log( (x == null && x !== 0) || !( x === undefined) ); // false

let age = 17;
console.log( (age >= 18  && age <= 25 ) || !(age < 20) ); // false

let a1 = false , b1 = 0, c1 = "";
console.log( (!a1 && !b1) || c1 ); //""

let p = "hello" , q = 0;
console.log( ( p && q ) || (!q && p) );

let x1 = 10;
console.log( (x1 > 5 || x1 < 3) && !(x1 == "10") );

let a2 = "0", b2 = 0, c2 = false;
console.log( (a2 == b2 && !c2) || ( a2 === b2 && c2 ) );









