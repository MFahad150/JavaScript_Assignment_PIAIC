// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let car = "BMW";
console.log("Is car == 'BMW'? I predict True.");
console.log(car == 'BMW');
// True Test
for(var i=0; i<=5 ; i++){
    let car = "Toyota";
    console.log("Is car == 'Toyota'? I predict True.");
    console.log(car == 'Toyota');
}
// False Test
for(var i=0; i< 5 ; i++){
    let car = "Honda";
    console.log("Is car == 'Toyota'? I predict True.");
    console.log(car == 'Toyota');
}
//Tests for equality and inequality with strings
let car1 = "bMW";
console.log("Is car == 'BMW'? I predict True.");
console.log(car1 == 'BMW');
// • Tests using the lower case function
let car2 = "BMW";
console.log("Is car == 'BMW'? I predict True.");
console.log(car2.toLowerCase() == 'BMW');
// • Numerical tests involving equality and inequality,
let car3 = "BMW";
console.log("Is car == 'BMW'? I predict True.");
console.log(car3.length == 'BMW');