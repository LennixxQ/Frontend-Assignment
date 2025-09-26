function brushTeeth(brsuhFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (brsuhFail) {
        reject("Error: brushTeeth failed");
        return;
      }
      resolve("Brushed teeth");
    }, 1000);
  });
} 


function haveBreakfast(hadBreak = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hadBreak) {
        reject("Error: haveBreakfast failed");
        return;
      }
      resolve("Had Breakfast");
    }, 1500);
  });
}

function goToWork(work = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (work) {
        reject("Error: goToWork failed");
        return;
      }
      resolve("Reached Office");
    }, 1000);
  });
}

async function runMorningRoutine() {
  try {
    const brushed = await brushTeeth();
    console.log(brushed);
    const ate = await haveBreakfast();
    console.log(ate);
    const reached = await goToWork();
    console.log(reached);
    console.log("All tasks done!"); 
  } 
  catch (error) {
    console.log(String(error));
  }
}
