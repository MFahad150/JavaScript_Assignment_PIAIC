// 36.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(s1= "Large", m= "I Love JavaScript"){
    console.log(m +" Shirt is available on "+ s1 + " size" );
    }
    make_shirt();
    make_shirt(s1="Medium");
    make_shirt(s1="XL", "A Nice Bold Man");