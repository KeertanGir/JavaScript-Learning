

let a = 2000

if (true) {
    let a = 10; // functional Scope
    const b = 12; // functional Scope
    var c = 30;
    console.log("INNER : ", a);
    
}


console.log( "Outer : ", a);
// console.log(b);
console.log(c);

