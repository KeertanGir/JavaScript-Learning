// first object of the JS by keertan gir
// object
const car = {
//   Object properties
    type : "sedan",
    model : 2005,
    color: "white",

    start: function() {
        console.log("Engine is Started.....");
    } ,

    drive : function() {
        console.log("Driving the car");
    }
}

// two ways to accessing the object!
// 1.> Dot Notation --> objectName.PropertyName // prpbability isko Use krty hain
console.log(car.type);
 
// 2.> Square/Bracket Notation --> objectName["propertyName"] // special Cases main Isko Use Kiya jata hy
console.log(car["model"]);

// 3.> Callin Method
console.log(car.start()); // excute the function .. also Give Undifined

// console.log(car.drive());
car.drive();




