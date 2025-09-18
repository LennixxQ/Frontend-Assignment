let markBMI = 0;
let johnBMI = 0;

let markHeight = prompt("Enter the height of Mark in meter:");
let markWeight = prompt("Enter the weight of Mark in Kg:");

let johnHeight = prompt("Enter the height of John in meter:");
let johnWeight = prompt("Enter the weight of John in Kg:");

markHeight = Number(markHeight);
markWeight = Number(markWeight);
johnHeight = Number(johnHeight);
johnWeight = Number(johnWeight);


markBMI = markWeight / (markHeight ** 2);   
johnBMI = johnWeight / (johnHeight ** 2);

console.log("The BMI of Mark:", markBMI);
console.log("The BMI of John:", johnBMI);

if (markBMI > johnBMI) {
    let markHigherbmi = true;
    console.log("BMI of Mark is higher than John:", markHigherbmi);
} else if (johnBMI > markBMI) {
    let johnHigherbmi = true;
    console.log("BMI of John is higher than Mark:", johnHigherbmi);
} else {
    console.log("Both have the same BMI.");
}
