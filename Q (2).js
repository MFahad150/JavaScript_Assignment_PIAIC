// 3.	Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name = "FahaD asif";

function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 console.log("Title Case: " + sentence.join(" "));
 return sentence;
 }
console.log("Upper Case: " + name.toUpperCase());
console.log("Lower Case: " + name.toLowerCase());
titleCase(name);