// 30.	No Users: Add an if test to Exercise 29 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let users = ["Author", "Admin", "Contributor", "Editor", "Subscriber"];
if (users == 0){
console.log(" We need to find some users!");
}
else {
console.log("The list is not Empty");
}
// removing the list
a = users.length; 
for(var i=0; i < a; i++){
    users.pop();
}
console.log(users);
if (users == 0 ){
    console.log(" We need to find some users!");
    }else {
    console.log("The list is not Empty");
    }