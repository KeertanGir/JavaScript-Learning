// Symbols --> Primitive Type in JS

const mySym = Symbol("Key1"); // --> yeh eik Symbol Ban Chuka hy
const JsUser2 = {
    name: "Keertan Gir",
    "Full Name": "Keertan Gir Goswami",
    [mySym]: "myKey1",
    age: 18,
    greetingThree: function(){
        console.log(`Hello ${this.name}`);  
    }
}

console.log(JsUser2.name);
// console.log(JsUser2.Full Name);// Full Name Ko DOT NOATATION se access nhi ker saghty
console.log(JsUser2["Full Name"]); // yeh valid hy
console.log(JsUser2.mySym); // Undefined
console.log(JsUser2[mySym]); // ab aaye gha sahi answer


//  Function
JsUser2.greeting = function() {
    console.log("Hello JS User");
}

JsUser2.greetingTwo = function() {
    console.log(`Hello JS User ${this["Full Name"]}`);
}

JsUser2.greeting();
JsUser2.greetingTwo();
JsUser2.greetingThree();