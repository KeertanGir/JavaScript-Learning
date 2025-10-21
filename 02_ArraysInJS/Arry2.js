const newArr = [1, 2, 3, 4, 5];
const newArr2 = [779, 234, 111];

// newArr.push(newArr2);
// console.log(newArr); // [1,2,3,4,5, [779, 234, 111]];


// is this we can only add one array in this
// const nar = newArr.concat(newArr2); // [1,2,3,4,5,779, 234, 111];
// console.log(nar);

// Spread 
const marvels = ["Spider man", "iron man", "captain america"];
const dc = ["Super man", "Bat man", "hulk"];

const all_new_hereos = [...marvels, ...dc]; 
console.log(all_new_hereos);


// flat .. Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const anotherArr = [1, 2, 3, 4, [6, 7, 8, 8], 7, [6, 7, 8, 9, [10, 12, 23, 12]]]; // array in array in array

const real_arr = anotherArr.flat(Infinity); // till depth
console.log(real_arr);

const real_arr2 = anotherArr.flat(1); // only 1 depth
console.log(real_arr2);

console.log(Array.isArray("Keertan Gir")); // chech wether it is array or not
console.log(Array.from("Keertan Gir"));  // Create array frome Array Like Element

console.log(Array.from({name: "Keertan Grr"})); // --> Intresting for interview  []

let score1 = 100;
let score2 = 200;
let score3 = 300;

const scores =  Array.of(score1 , score2 , score3);
console.log(scores);
console.log( "Score : "+ scores);



