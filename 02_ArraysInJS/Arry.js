// * arrays are the objects in JavaScript
// * is can store Elements Like : Object, Strings , Numbers, even another array also
// * making them essesial for JavaScript Programming
// * Arrays Are Resize Able in JS
// * Array Make Shallow Copy {Sharing Same Reference}


const myArr = [0 , 1, 2, 3, 4, 5 ];
const myHeros = ["ShaktiMan", "Naagraj"];

const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr[0]);

// console.log("My Fav Hero is : "+ myHeros[1]);

// Add new element in End of the Array
myArr.push(4);
myArr.push(7);
myArr.push(8,9,20,23,22); // we also can call muiltiple items within one push method
console.log(myArr);
// remove Last Element from the Array
myArr.pop();
// console.log(myArr);
// add item in the Starting of the array -- time costly operation // shift all the next items 
myArr.unshift(10);
// console.log(myArr);

// remove first element
myArr.shift();
// console.log(myArr);


// console.log(myArr.includes(3)); // true
// console.log(myArr.includes(8)); // false

// console.log(myArr.indexOf(3)); // 3
// console.log(myArr.indexOf(9)); // -1 ka mtlb hy isme 9 exist nhi krta

const newArr = myArr.join(); // convert  Array Object in String
console.log(newArr);
console.log(typeof newArr); // String


// let nnewAr = [9,7,10,21];

// nnewAr = myArr.join();  // change in String 
// console.log(nnewAr);











 


