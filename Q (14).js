// 14.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 13. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guest = ["Hasnain", "Rizwan", "Mustafa"];

for(var i=0; i< guest.length; i++){
    console.log("Dear "+ guest[i] + " I'm arranging dinner tonight at my home and i inviting you to join.")
}

console.log("Mustafa is not coming");

guest.splice(2,1, "Shahzad");

console.log("This is The Modified list\n");
console.log(guest);

console.log("Sending Second Invites\n ")
for(var i=0; i< guest.length; i++){
    console.log("Dear "+ guest[i] + " I'm arranging dinner tonight at my home and i inviting you to join.")
}


