const usualTip = 15/100;
const happyTip = 20/100;

// let billValue = parseInt(prompt("Enter the Bill Amount"));
function calcTip(amount) {
  if (amount >= 50 && amount <= 300) {
    amount = amount + (amount * usualTip);
    return amount;
  } else {
    amount = amount + (amount * happyTip);
    return amount;
  }
}

let Bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function calTip(Bill){
    for(let i = 0; i < Bill.length; i++){
        if(Bill[i] >= 50 && Bill[i] <= 300){
            Bill[i] = Bill[i] + Bill[i] * usualTip;
        } else{
            Bill[i] = Bill[i] + Bill[i] * happyTip;
        }
    }
    return Bill;
}

function calculateTip(Amount){
    let finalTotal = Amount.map(x => {
        if(x >= 50 && x <= 300){
            return x + x * usualTip;
        } else{
            return x + x * happyTip;
        }
    });
    return finalTotal;
}

let tipsAndTotals = calculateTip(Bills);
console.log(tipsAndTotals);


// let Bill1 = calcTip(billValue);
// console.log(Bill1);


