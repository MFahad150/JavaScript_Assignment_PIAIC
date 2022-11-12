// 40.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(m){

for (let i=0; i< m.length; i++){
    console.log(m[i]);
}
}
let magicians = ["Jack", "Nick", "Floyd"];
show_magicians(magicians);