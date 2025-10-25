// imidiate Invocked Funtions Expressions IIFE
 

 // normal funtion
(function chai(){
    // named IIFE 
    console.log("DB Is connected");
})();

( (name) => {
    console.log(`Db is Connected ${name}`);
})("Keertan Gir");

