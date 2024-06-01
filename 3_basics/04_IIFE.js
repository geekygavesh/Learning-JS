//     Immediately invoked function expressions. (IIFE)
 // iife is a function that runs the moment it is invoked
 (function chai(){
    // named iife
    console.log(`DB connected`);
 })();

 ///   () first wala to fxn ki defn ke liye. () swcond wala execution ke liye

 // global scope ke pollutiion se problem hoti h i.e why iife ka use krte  inshort encaps. the code

 ( (name) => {
    console.log(`DB connected two ${name}`);
 })('gavesh')