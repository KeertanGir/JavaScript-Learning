// Object.create(); // singleTon Object

// object Litrals... 
const JsUser = {
    name: "Keertan",
    age: 18,
    location: "Mithi",
    email: "Keertan@google.com",
    isLoged: false,
    lastLogedDays: ["Monday", "Saturday"]
}

console.log(JsUser.name);
console.log(JsUser["email"]);

JsUser.email = "KeertanGir@avanza.com";
// Email Changed.
console.log(JsUser["email"]);

//  is Method ke bad koi bhi change Object Accept nhi kary gha
Object.freeze(JsUser); 

JsUser.email = "KeertanGir@System.com"; // yeh Change Accept Nhi Kary gha
console.log(JsUser["email"]);

console.log(JsUser); // Pura Object Print Hoga
