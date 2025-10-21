// Difference Between Slice and Splice
// Slice : Show The Part of value but not include till index Value // also can't change the object
// Splice : Show the Part of array but also include till index and is Manuplace the Array

const newArr = [2,4,5,6,4,2,6,3];
const myn1 = newArr.slice(2,6);
console.log(myn1);
console.log(newArr);

const myn2 = newArr.splice(2,4);
console.log(myn2);
console.log(newArr);





