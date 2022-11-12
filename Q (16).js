// 16.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 15. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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

for(var i=0; i< guest.length; i++){
    console.log("Dear "+ guest[i] + " I'm arranging dinner Tonight at my home and i inviting you to join.")
}

console.log("Invite only two people for dinner.");
for(var i = 0; i < 4; i++){
    console.log(guest[i] + " We are Sorry we can't invite you.");
    }
for(var i = 0; i < 4; i++){
guest.shift();
}
console.log(guest);
for (var i=0; i < guest.length; i++){
    console.log(guest[i] + " You'r still invited");
}
console.log("Empty List");
for(var i = 0; i<2; i++){
    guest.shift();
}
console.log(guest);