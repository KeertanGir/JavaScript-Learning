const cour = {
    cname : "Js With Keertan",
    price : 1999,

    wellcomeMessage : function(){
        console.log(`${this.cname} , Well come to the Website`);
        console.log(this);
        
    }
}

// cour[wellcomeMessage()]
cour.wellcomeMessage();
cour.cname = "Java with Keertan";
cour.wellcomeMessage();


// console.log(this); // --> {}

// function chai(){
//     let name = "Keertan Gir";
//     console.log(this.name);
// }

// chai(); // undefiend

// const chai = function (){
//     let name = "Keertan Gir";
//     console.log(this.name);
// }

// chai();


// ++++++++++++++++++++++  Arrow Function +++++++++++

const chai = () => {
    let name = "Keertan Gir";
    console.log(this); // undefined
}

// chai();

// console.log(addTwo(12, 3));// dont run before func Defination

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1 , num2) => num1 + num2;

const addTwo = (num1 , num2) => (num1 + num2);

console.log(addTwo(12, 3));


//  print object

const namaobj = () => ({username : "Keertan Gir"});

console.log(namaobj());




