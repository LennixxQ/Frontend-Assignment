// 1.You have an array of strings: ["apple", "banana", "kiwi", "grape", "blueberry"]. 
// 1.Create a new array containing only the strings that have a length greater than 5.
// 2.Transform this filtered array into a new array where each string is capitalized.

function generateArray(){
    let fruits = ["apple", "banana", "kiwi", "grape", "blueberry"];

    let filteredArray =  fruits.filter(fruit => fruit.length > 5);
    console.log(filteredArray);
    
    let capitalizedArray = filteredArray.map(fruit => fruit.toUpperCase());
    console.log(capitalizedArray);
    
    
    document.getElementById("GenerateArray").innerHTML = `
    Original String: ${fruits} <br> <br>
    Long String: ${filteredArray} <br> <br>
    Generated Array: ${capitalizedArray}`;
}


