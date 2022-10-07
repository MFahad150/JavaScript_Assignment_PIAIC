// 33.	Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in the, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
for(var i=1; i < 10; i++){
    if(i == 1)  
    {  
    console.log("The " + i + "st ordinal number");  
    }  
    else if(i == 2)  
    {  
   console.log("The " + i + "nd ordinal number.");  
    }  
    else if(i == 3)  
    {  
    console.log("The " + i + "rd ordinal number.");  
    }  
    else  
    {  
   console.log("The " + i + "th ordinal number.");  
    }  
    }  
