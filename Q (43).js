// 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function Sandwiches(f){
    console.log("Preparing Sandwich:");
    for(var i=0; i < 3; i++) {
        console.log("  ...adding " + f + " to your sandwich.");
    }
console.log("Sandwich is Ready to serve");
}
Sandwiches('roast beef', 'cheddar cheese', 'lettuce');
Sandwiches('turkey', 'apple slices', 'honey mustard');
Sandwiches('peanut butter', 'strawberry jam');