
function names(name){
    return name;
}
console.log('names("Keertan", "Rahul", "Rohan", "Parshant") ===>>> ' ,names("Keertan", "Rahul", "Rohan", "Parshant")); // yeh sirf Keertan PRint kary gha

// to over come this Problem we use (...) REST operator
                        // ... this is also Rest Operator 
function calculateCarPrice(...price){
    return price;
}
console.log("calculateCarPrice(2000, 333, 12333, 10000) ===>>> " , calculateCarPrice(2000, 333, 12333, 10000));

//  funtions with Object
const course = {
    name : "JavaScript With Keertan",
    prices : 1999
}

function handleObjByfunc(anyObj){
    return `Course Name :  ${anyObj.name} , price is ${anyObj.price}.`
}                                                      // Undifined

console.log( "handleObjByfunc(course) ===>>> " ,handleObjByfunc(course));


// funtion with Array

const ar = [12, 23, 44, 231, 1 ];

function findSeconfNum(anyArray){
    return anyArray[1]
}

console.log( "findSeconfNum(ar) ===>>> " , findSeconfNum(ar));
