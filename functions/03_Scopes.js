

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


// ++++++++++++++++++++  Scopes IN Depth +++++++++++++++++++
// Nested Funtion and their Scopes
function one(){
    const username = "Keertan gir";

    function two(){
        const webPage = " Github";
        console.log(username + webPage);
    }

    // console.log(webPage); // Give Error

    two();
}
// console.log(username); // error
one();

// ++++++++++++++++++ Scopes With If +++++++++++++++++++++

if(true){
    const user = "keertan";
    if(user === "keertan"){
        const web = " GitHUb";
        console.log(user + web);
    }
    // console.log(web);  // Give Error > ReferenceError
    
}

// console.log(user); // Give ReferenceError



// +++++++++++ Mini Hoisting +++++ Intresting ++++++++++++++++

console.log(addOne(2)); // can acces addOne Before initialization
function addOne(num) {
    return num + 1;
}

console.log(addOne(2)); // 3




console.log(addTwo(4)); // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num2){
    return num2 + 2;
}
console.log(addTwo(4)); // 6

