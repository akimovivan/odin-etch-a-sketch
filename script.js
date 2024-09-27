"use strict";

const grid = document.getElementById("grid");
const resetButton = document.getElementById("reset")

const GRID_SIZE = 960;



function addSquares(numOfElements) {
    let size = GRID_SIZE / numOfElements;
    for (let i = 0; i < numOfElements ** 2; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = `${size}px`
        div.style.height = `${size}px`
        grid.appendChild(div);
    }
}

function randomRgba() {
    let o = Math.round, r = Math.random, s = 255;
    return `rgba(${o(r() * s)},${o(r() * s)},${r().toFixed(1)})`;
}
resetButton.addEventListener("click", () => {
    grid.innerHTML = '';
    let size = parseInt(prompt("Select grid size"));
    if (size > 100) {
        alert("Grid is too big");
    }
    addSquares(size);
});

grid.addEventListener("mouseenter", event => {
    if (event.target.classList.contains('square') && event.ctrlKey) {
        // event.target.classList.add('hovered');
        event.target.style.backgroundColor = randomRgba();
    }
}, true);
