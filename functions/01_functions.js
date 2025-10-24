

// how to decelare function
// keyword name(parameters){
//     syntax
// }


// defination Of function
function sayMyName() {
    console.log("K");
    console.log("E");
    console.log("E");
    console.log("R");
    console.log("T");
    console.log("A");
    console.log("N");

}

// sayMyName // reference of the function
// sayMyName(); // calling of the function


// writing a function to add two numbers
function sum(number1 , number2){
    console.log(number1 + number2);
}

sum(12, 12);  // if boths are number

sum(12, "12"); // is one of them is String  // 12 12

// retrun type of funtion:: function returning Some Thing

function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}

multiply(12,2);  // cant print anything because its is the Return Type Funtion
console.log(multiply(12, 2));  // it directily print 


// store the returned value Of the Funcion in DT
const result = multiply(13, 2);
console.log(result);



function loggedIn(username){
    return `${username} Logged just Now`;
}

const userLog =  loggedIn("Keertan");
console.log(userLog);


const userLog2 =  loggedIn(); // return undefined
console.log(userLog2);


function loggedIn2(username){
    if (!username)  /** (username === undefined) */ {
        console.log("Please Enter the user name");
        return
    }
    return `${username} Logged just Now`;
}

const log =   loggedIn2();  // this is ALSO undefined
console.log(log);

const user = loggedIn2("Keertan Gir");
console.log(user);

