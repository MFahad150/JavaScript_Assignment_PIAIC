// 38.	City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(c, cou){
    return (c + ", " + cou);
}
city = city_country("Barcelona", "Spain");
console.log(city);
city = city_country("Tirana", "Albania");
console.log(city);
city = city_country("Dortmund", "Germany");
console.log(city);