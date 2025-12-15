
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
       square.setAttribute("data-opacity","0")
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
        for ( let f = 0; f < gridNumber;f++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("data-opacity","0.3")
            row.appendChild(square);
   }
}
}else {
    const alert = document.querySelector("span");
    alert.textContent = "you must enter a number between 1 and 100 inclusive!"
    alert.style.color = "red"
   }
})


// drawing on the board
grid.addEventListener("mousemove",function(e){
        if (e.target.classList.contains("square")){
                    let opacity = parseFloat(e.target.getAttribute("data-opacity")) || 0.3
                    opacity += 0.1
                    e.target.style.backgroundColor =`rgba(0 ,0 , 0, 1)`
                    e.target.style.opacity = opacity.toString()
                    e.target.setAttribute("data-opacity",opacity)
                }
            })
        

            

