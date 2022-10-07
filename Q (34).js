// 35.	Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["Lion", "Leopard", "Tiger"];
for(let i=0; i< animals.length; i++){
console.log(animals[i] + " is very confident, perhaps too confident sometimes. Although they love adventures, and are addicted to excitement it is better not to challenge a " + animals[i] + " confidence.");
}
console.log("They all are Wild Animals");