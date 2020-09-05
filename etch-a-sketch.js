let submit = document.querySelector(`#submit`);
let drawingGrid = document.querySelector(`#drawing-grid`);
let rows = 0; 
let columns = 0;
let clear = document.querySelector(`#clear`);


let newDiv = function(){
    let gridCount = rows * columns;
    for(let i = 0; i < gridCount; i++){
        const box = document.createElement(`div`);
        box.setAttribute(`class`,`cell`);
        drawingGrid.appendChild(box);
    }
};

let removeAllChildNodes = function(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
};


submit.addEventListener(`click`,() => {
    rows = document.querySelector(`#rows`).value;
    columns = document.querySelector(`#columns`).value;
    if (0 > rows || rows >  100 || 0 > columns || columns > 100){
        alert("Please choose numbers between 0 and 100.");
    }
    else {
    let rowSize = `repeat(` + rows + `,` + (100/rows) + `%)`;
    let columnSize = `repeat(` + columns + `,` + (100/columns) + `%)`;
    removeAllChildNodes(drawingGrid);
    newDiv();
    document.getElementById(`drawing-grid`).style.gridTemplateColumns = columnSize;
    document.getElementById(`drawing-grid`).style.gridTemplateRows = rowSize;
    drawingGrid.addEventListener(`mouseover`,(e) => {
        let x = e.clientX, y = e.clientY;
        elementMouseIsOver = document.elementFromPoint(x, y);
        elementMouseIsOver.style.backgroundColor = "black"; 
    });
 }
});


let clearCells = function(cell){
    cell.style.backgroundColor = null;
};

clear.addEventListener(`click`,() => {
    drawingGrid.style.backgroundColor = null;
    let cells = drawingGrid.querySelectorAll(`div`);
    cells.forEach(clearCells);
});