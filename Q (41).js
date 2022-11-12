// 41.	Great Magicians: Start with a copy of your program from Exercise 40. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(m){

    for (let i=0; i< m.length; i++){
        console.log(m[i]);
    }
    }

    function make_great(m)
{
        for(var i=0; i<m.length; i++)
        {
            m[i]= m[i]+' Great Magician';
        }

    }

    let magicians = ["Jack", "Nick", "Floyd"];
    make_great(magicians);
    show_magicians(magicians);