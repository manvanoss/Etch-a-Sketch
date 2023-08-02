const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

createGrid = () =>{
    for (let i = 0; i < 256; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};

updateGrid = () => {
    grid.innerHTML = "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 2fr)`
    );
    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 2fr)`
    );

    for(let i = 0; i < userInput.value * userInput.value; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};
    userInput.addEventListener("change", updateGrid);

    resetButton.addEventListener("click", function() {
        grid.innerHTML = "";
        userInput.value = "";
        grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
        grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
        createGrid();
      });

      function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      createGrid();
      
      const squares = document.querySelectorAll(".square");
      squares.forEach(square => {
        square.addEventListener("mouseover", function(event) {
          const randomColor = getRandomColor();
          event.target.style.backgroundColor = randomColor;
        });
      });
      