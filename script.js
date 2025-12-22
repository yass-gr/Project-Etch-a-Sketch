
// creating the grid
let gridNumber = 64;
let showgrid = false;
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
       if (showgrid){
       square.setAttribute("style","border: 0.2px solid rgba(0, 0, 0, 0.151);")
       }
       row.appendChild(square);
   }
}
}


//input for the grid number

const gridNumberButton = document.querySelector(".enterButton");
const gridNumberInput = document.querySelector("#NumberInput");
gridNumberInput.value = gridNumber
gridNumberButton.addEventListener("click", function(){
const alert = document.querySelector("span");
alert.textContent = ""
if (gridNumberInput.value >= 1 && gridNumberInput.value <= 100){
    gridNumber = gridNumberInput.value;
    gridNumberInput.value = gridNumber;
    grid.innerHTML = "";
    creatGrid();
}else {
    
    alert.textContent = "you must enter a number between 1 and 100 inclusive!"
    alert.style.color = "red"

   }

})

//changing grid number with range input
const rangeText1 = document.querySelector(".r1")
const rangeText2 = document.querySelector(".r2")
const range = document.querySelector("#range")
rangeText1.textContent = gridNumber
rangeText2.textContent = gridNumber

range.addEventListener("input",function(){
    rangeText1.textContent = range.value;
    rangeText2.textContent = rangeText1.textContent;
    gridNumber = range.value;
    gridNumberInput.value = gridNumber
    grid.innerHTML = "";
    creatGrid();
    
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
})




     


// drawing on the board
    function drawing(e){
        if (isMousePressed && e.target){
         if (e.target.classList.contains("square") ){
         let opacity = parseFloat(e.target.getAttribute("data-opacity")) || 0.5
         opacity += 0.1
         e.target.style.backgroundColor = `${colors}`
         e.target.style.opacity = opacity.toString()
         e.target.setAttribute("data-opacity",opacity)

         }
            }
            
        
    }

function startDrawing(){
        isMousePressed = true;
    
  }

function stopDrawing(e){
            if (isMousePressed){
                isMousePressed = false;
            }
    }



function pressDrawing(){
    document.addEventListener("mousedown",startDrawing);
    document.addEventListener("mousemove",drawing);
    document.addEventListener("mouseup",stopDrawing);
}
function removePressDrawing(){
    document.removeEventListener("mousedown",startDrawing);
    document.removeEventListener("mousemove",drawing);
    document.removeEventListener("mouseup",stopDrawing);
}
function drawingLogic(e){
    if (e.target.classList.contains("square")){
         let opacity = parseFloat(e.target.getAttribute("data-opacity")) || 0.5
         opacity += 0.1
         e.target.style.backgroundColor = `${colors}`
         e.target.style.opacity = opacity.toString()
         e.target.setAttribute("data-opacity",opacity)
         }
     }

function hoverDrawing(){
    grid.addEventListener("mousemove",drawingLogic)
}
function removeHoverDrawing(){
    grid.removeEventListener("mousemove",drawingLogic)
}
function actualDrawing(){
    if (drawingMode === "hover"){
    hoverDrawing()
}else if (drawingMode === "press"){
    pressDrawing()
}
}

const modeSelect = document.querySelector("#mode");
let drawingMode = modeSelect.value; 
let isMousePressed = false;
actualDrawing()

modeSelect.addEventListener("change",function(){
    removePressDrawing()
    removeHoverDrawing()
    drawingMode = modeSelect.value
    actualDrawing()
})
        
//reset board
const reset = document.querySelector(".reset");
reset.addEventListener("click",function(){
        grid.innerHTML = "";
        creatGrid();
} )

//eraser
const eraser = document.querySelector(".eraser")
eraser.addEventListener("click",function()  {
    isColorPicked = true
    colors = "white"
   
})

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
    if (e.key === "w"){
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



//grid input
const gridCheckbox = document.querySelector("#showGrid")
gridCheckbox.addEventListener("change",function(){
    if (gridCheckbox.checked){
        showgrid = true
    }else{
        showgrid = false
    }
    grid.innerHTML = "";
    creatGrid();
})
