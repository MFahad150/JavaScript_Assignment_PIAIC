// 6.	Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var name = " Fahad Asif ";
console.log(name);
console.log(name.slice(1,6) + name.slice(7,11));

console.log("\n"+name);
console.log("\t"+name);