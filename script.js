
// creating the grid
let gridNumber = 16;
const grid = document.querySelector(".grid");
creatGrid();

function creatGrid(){
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
    creatGrid();
}else {
    const alert = document.querySelector("span");
    alert.textContent = "you must enter a number between 1 and 100 inclusive!"
    alert.style.color = "red"
   }
})



let colors = "black" 
let isColorPicked = true;

//rainbow color
const rainbow = ["red","orange","yellow","green","blue","indigo","violet"]
const rainbowButton = document.querySelector(".rainbow")
function colorChange(){
    grid.addEventListener("mousemove",function(){
         if (isColorPicked === false){
        let randomColor = Math.floor(Math.random() * rainbow.length)
        colors = rainbow[randomColor]
    }   
    }
    )
}
rainbowButton.addEventListener("click",function(){
    isColorPicked = false;
    colorChange()  
})



//selectinng color
const colorPicker = document.querySelector("#color")
colorPicker.addEventListener("change",function(e){
    colors = colorPicker.value 
    isColorPicked = true;
    console.log(isColorPicked)
})


// drawing on the board
grid.addEventListener("mousemove",function(e){
    if (e.target.classList.contains("square")){
         let opacity = parseFloat(e.target.getAttribute("data-opacity")) || 0.3
         opacity += 0.1
         e.target.style.backgroundColor = `${colors}`
         e.target.style.opacity = opacity.toString()
         e.target.setAttribute("data-opacity",opacity)
         }
     })
        
//reset board
const reset = document.querySelector(".reset");
reset.addEventListener("click",function(){
        grid.innerHTML = "";
        creatGrid();
} )

//shortcuts:

//press enter to submit the grid number
const enter = new Event("click");
document.addEventListener("keypress",function(e){
    if (e.key === "Enter"){
        gridNumberButton.dispatchEvent(enter)
    }
})

//press R to reset 
document.addEventListener("keypress",function(e){
    if (e.key === "r"){
        reset.dispatchEvent(enter)
    }
})

//press c for rainbow color
document.addEventListener("keypress",function(e){
    if (e.key === "c"){
        rainbowButton.dispatchEvent(enter)
    }
})

//press b for black color
document.addEventListener("keypress",function(e){
    if (e.key === "b"){
        isColorPicked = true;
        colors = "black"
    }
})


            

