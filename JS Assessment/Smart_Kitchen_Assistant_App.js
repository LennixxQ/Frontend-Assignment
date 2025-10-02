const tasksToDo = ["prepare breakfast", "wash dishes", "make coffee"];

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function prepareBreakfast(shouldSucceed = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldSucceed) {
        reject(`Error: ${capitalizeFirstLetter(tasksToDo[0])} failed`);
        return;
      }
      resolve(`${capitalizeFirstLetter(tasksToDo[0])} completed`);
    }, 1500);
  });
}

function washDishes(shouldSucceed = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldSucceed) {
        reject(`Error: ${capitalizeFirstLetter(tasksToDo[1])} failed`);
        return;
      }
      resolve(`${capitalizeFirstLetter(tasksToDo[1])} completed`);
    }, 1200);
  });
}

function makeCoffee(shouldSucceed = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldSucceed) {
        reject(`Error: ${capitalizeFirstLetter(tasksToDo[2])} failed`);
        return;
      }
      resolve(`${capitalizeFirstLetter(tasksToDo[2])} completed`);
    }, 1000);
  });
}

async function RoutineStarted() {
  const output = document.getElementById("task-output");
  output.innerHTML = "";

  output.innerHTML += `<div><strong>Today's Routine Tasks:</strong></div>`;
  tasksToDo.forEach((task, index) => {
    output.innerHTML += `<div>${index + 1}. ${capitalizeFirstLetter(task)}</div>`;
  });

  try {
    output.innerHTML += `<br><div><strong>Starting routine...</strong></div>`;

    const breakfastMsg = await prepareBreakfast(true);
    output.innerHTML += `<div>${breakfastMsg}</div>`;

    const dishesMsg = await washDishes(true);
    output.innerHTML += `<div>${dishesMsg}</div>`;

    const coffeeMsg = await makeCoffee(true);
    output.innerHTML += `<div>${coffeeMsg}</div>`;
  } catch (error) {
    output.innerHTML += `<div style="color:red;">${error}</div>`;
  }
}

function resetRoutine() {
  document.getElementById("task-output").innerHTML = "";
}
