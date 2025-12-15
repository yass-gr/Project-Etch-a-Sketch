
// creating the grid
let gridNumber = 16;
const grid = document.querySelector(".grid");

for ( let i = 0; i < gridNumber;i++){
   const row = document.createElement("div");
   row.classList.add("row");
   grid.appendChild(row);
   for ( let i = 0; i < gridNumber;i++){
       const square = document.createElement("div");
       square.classList.add("square");
       row.appendChild(square);
   }
}


//input for the grid number
const gridNumberButton = document.querySelector(".enterButton");
const gridNumberInput = document.querySelector("#NumberInput");
gridNumberInput.value = gridNumber
gridNumberButton.addEventListener("click", function(){
if (gridNumberInput.value >= 1 && gridNumberInput.value <= 100){
    gridNumber = gridNumberInput.value;
    gridNumberInput.value = gridNumber;
    grid.innerHTML = "";

    for ( let i = 0; i < gridNumber;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
        for ( let i = 0; i < gridNumber;i++){
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
   }
}
}else {
    const alert = document.querySelector("span");
    alert.textContent = "you must enter a number between 1 and 100 inclusive!"
    alert.style.color = "red"
   }
})








