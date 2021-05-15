const gridContainer = document.querySelector("#grid-container");
	const resetButton = document.querySelector("#reset-button");
	
	window.addEventListener("load", setDefault);
	resetButton.addEventListener("click", changeSize);
	
	function setDefault() {
	  GridSize(16);
	  fillGrid(16);
	}
	
	function GridSize(size) {
	  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	}
	
	function fillGrid(size) {
	  for (let i = 0; i < size * size; i++) {
	    const gridElement = document.createElement("div");
	    gridElement.classList = "grid-element";
	    gridElement.addEventListener("mouseover", changeColor);
	    gridContainer.appendChild(gridElement);
	  }
	}
	
	function changeColor(e) {
	  const random1 = Math.floor(Math.random() * 256);
	  const random2 = Math.floor(Math.random() * 256);
	  const random3 = Math.floor(Math.random() * 256);
	  e.target.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
	}
	
	function changeSize() {
	  let newSize = prompt("Enter new size");
	
	  if (newSize !== null) {
	    newSize = parseInt(newSize);
	    if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
	      alert("Enter a number from 1-64 range");
	      changeSize();
	    } else {
	      clearGrid();
	      setGridSize(newSize);
	      fillGrid(newSize);
	    }
	  }
	}
	
	function clearGrid() {
	  const gridArray = Array.from(gridContainer.childNodes);
	  gridArray.forEach((element) => {
	    gridContainer.removeChild(element);
	  });
	}