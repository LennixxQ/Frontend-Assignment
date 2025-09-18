let dolphineScore1 = [96, 108, 89];
let koalasScore1 = [88, 91, 110];

let dolphineScoreBonus1 = [97, 112, 101];
let KoalasScoreBonus1 = [109, 95, 12];

let dolphineScoreBonus2 = [97, 112, 101];
let KoalasScoreBonus2 = [109, 95, 106];

function calAverage(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  let avg = sum / arr.length;
  return avg;
}

let dolphinAvg1 = calAverage(dolphineScore1);
let koalasAvg1 = calAverage(koalasScore1);

let dolphinAvg2 = calAverage(dolphineScoreBonus1);
let koalasAvg2 = calAverage(KoalasScoreBonus1);

let dolphinAvg3 = calAverage(dolphineScoreBonus2);
let koalasAvg3 = calAverage(KoalasScoreBonus2);

console.log("1st Average of Dolphins: " + dolphinAvg1);
console.log("1st Average of Koalas: " + koalasAvg1);

console.log("2nd Average of Dolphins: " + dolphinAvg2);
console.log("2nd Average of Koalas: " + koalasAvg2);

console.log("3rd Average of Dolphins: " + dolphinAvg3);
console.log("3rd Average of Koalas: " + koalasAvg3);

// if(dolphinAvg1> koalasAvg1){
//     console.log("Dolphin Wins!");
// }
// else if(koalasAvg1 > dolphinAvg1){
//     console.log("Koalas Wins!!");
// }
// else{
//     console.log("Match Draw");
// }

const minimumPoints = 100;

// if(dolphinAvg2 > koalasAvg2 && dolphinAvg2 > minimumPoints){
//     console.log("Dolphin Wins!!");
// }
// else if(dolphinAvg2 < koalasAvg2 && koalasAvg2 > minimumPoints){
//     console.log("Koalas Wins!!");
// } else
// {
//     console.log("Match is Draw!");
// }

// if(dolphinAvg3 > koalasAvg3 && dolphinAvg3 > minimumPoints){
//     console.log("Dolphin Wins");
// } else if(dolphinAvg3 < koalasAvg3 & koalasAvg3 > minimumPoints){
//     console.log("Kolas Wins");

// }
// else {
//     console.log("Match is Draw!!");
//     console.log("No team wins the Trophy");
// }

if (
  dolphinAvg2 > koalasAvg2 &&
  dolphinAvg3 > koalasAvg3 &&
  dolphinAvg2 > minimumPoints &&
  dolphinAvg3 > minimumPoints &&
  dolphinAvg2 != koalasAvg2 &&
  dolphinAvg3 != koalasAvg3
) {
  console.log("Dolphin Wins!!");
} else if (
  koalasAvg2 > dolphinAvg2 &&
  koalasAvg3 > dolphinAvg3 &&
  koalasAvg2 > minimumPoints &&
  koalasAvg3 > minimumPoints &&
  koalasAvg2 != dolphinAvg2 &&
  koalasAvg3 != dolphinAvg3
) {
  console.log("Koalas Wins!!");
} else {
  console.log("Match is Draw!!");
  console.log("No team wins the Trophy");
}
