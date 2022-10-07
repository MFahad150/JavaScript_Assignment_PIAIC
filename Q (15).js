// 16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest = ["Hasnain", "Rizwan", "Mustafa"];

for(var i=0; i< guest.length; i++){
    console.log("Dear "+ guest[i] + " I'm arranging dinner Tonight at my home and i inviting you to join.")
}
console.log("Mustafa is not coming");

guest.splice(2,1, "Shahzad");
console.log("This is The Modified list\n");
console.log(guest);

console.log("Sending Second Invites\n ")
for(var i=0; i< guest.length; i++){
    console.log("Dear "+ guest[i] + " I'm arranging dinner Tonight at my home and i inviting you to join.")
}
console.log("I'm arranging a big Dinner at my Home");

console.log("Adding one in the Beginnig");
guest.unshift("Waris");
console.log(guest);

console.log("Adding one in the Middle");
guest.splice(2,0, "Owais");
console.log(guest);

console.log("Adding one in end");
guest.push("Aslam");
console.log(guest);
