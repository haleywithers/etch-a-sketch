const gridCanvas = document.querySelector(".canvas");
const gridSizeButtons = document.querySelectorAll(".grid-size-choice");
const gridColorButtons = document.querySelectorAll(".color-choice");
const rainbowColors = ['#F6D3D3', '#671F2C', '#F16B30', '#DCCFBF', '#262221'];
const clearButton = document.querySelectorAll(".clear");


let currentGridSize = 16;
let currentColorMode = 'black';
let rainbowIndex = 0;

function createGrid(size) {
    gridCanvas.innerHTML = "";
    
    gridCanvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridCanvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement("div");
        square.classList.add("grid-box");

        square.addEventListener("mouseenter", function() {
            colorSquare(square);
        });

        square.addEventListener('touchmove', function(e) {
            e.preventDefault(); 
            const touch = e.touches[0];
            const element = document.elementFromPoint(touch.clientX, touch.clientY);
            if (element && element.classList.contains('grid-box')) {
                colorSquare(element);
            }
        });
        
        gridCanvas.appendChild(square);
    }
}

function colorSquare(square) {
    if (currentColorMode === 'rainbow') {
        square.style.background = rainbowColors[rainbowIndex];
        rainbowIndex = (rainbowIndex + 1) % rainbowColors.length;
    } else {
        square.style.background = currentColorMode;
    }
}

gridSizeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let gridSize = button.textContent.trim();;
        console.log("Button clicked! Text content:", gridSize); 

        if (gridSize === "?") {
            console.log("Question mark clicked!");
            let randomSize = Math.floor(Math.random() * 17) + 4;
            console.log("Random size generated:", randomSize);
            currentGridSize = randomSize;
            createGrid(randomSize);
        } else {
            gridSize = parseInt(gridSize);
            currentGridSize = gridSize;
            createGrid(gridSize);
        }
    });
});

gridColorButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        
        if (button.classList.contains('black')) {
            currentColorMode = 'black';
        } else if (button.classList.contains('grey')) {
            currentColorMode = 'gray';
        } else if (button.classList.contains('rainbow')) {
            currentColorMode = 'rainbow';
        } 

        
    })
})


clearButton.forEach(function(button) {
    button.addEventListener("click", function() {
        createGrid(currentGridSize);
    });
});


const settingsToggle = document.querySelector('.settings-toggle');
const options = document.querySelector('.options');

settingsToggle.addEventListener('click', function() {
    options.classList.toggle('active');
});




createGrid(16);
