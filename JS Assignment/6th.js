console.log("Hello");


function chopVegetables(vegetables = false){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(vegetables){
                reject("Cannot Chopped Vegetables");
                return;
            }
            resolve("Chopped Vegetables");
        }, 1000);
    })
}

function cookMeal(meal = false) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if(meal){
                reject("Meal didn't Cooked");
                return;
            }
            resolve("Cooked the meal");
        }, 1500);
     })
}


function setTable(table = false){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if(table){
                reject("Table is not set");
                return;
            }
            resolve("Table is set");
        }, 1000);
     })
}

async function preparingDinner() {
    const mealDiv = document.getElementById("preapring-meal");
    mealDiv.innerHTML = "Vegetables: ...";
    const chopped = await chopVegetables();
    mealDiv.innerHTML = `Vegetables: ${chopped} <br>Cook Meal: ...`;
    const cooked = await cookMeal();
    mealDiv.innerHTML = `Vegetables: ${chopped} <br>Cook Meal: ${cooked} <br>Set Table: ...`;
    const tableSet = await setTable();
    mealDiv.innerHTML = `Vegetables: ${chopped} <br>Cook Meal: ${cooked} <br>Set Table: ${tableSet} <br><br>Dinner is Ready!!`;
}