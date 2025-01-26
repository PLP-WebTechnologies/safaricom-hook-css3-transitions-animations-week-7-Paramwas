// script.js

// Function to calculate the area of a rectangle
function calculateArea() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);

  if (!isNaN(length) && !isNaN(width)) {
    const area = length * width;
    document.getElementById("area-result").textContent = `The area is: ${area}`;
  } else {
    document.getElementById("area-result").textContent = "Please enter valid numbers.";
  }
}

// Demonstrating scope (local vs global)
let globalVariable = "I am global!";

function demonstrateScope() {
  let localVariable = "I am local!";
  console.log(globalVariable); // Accessible
  console.log(localVariable); // Accessible
}

demonstrateScope();
// console.log(localVariable); // Uncommenting this will cause an error

// Toggling a CSS class for animations
const toggleAnimationBtn = document.getElementById("toggle-animation");
const modal = document.getElementById("modal");

toggleAnimationBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

// Additional interactive button functions

// Changing button color dynamically
const colorBtn = document.querySelector(".color-btn");
colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = document.body.style.backgroundColor === "rgb(244, 244, 249)" ? "#f0f0f0" : "#f4f4f9";
});

// Rotating the button
const rotateBtn = document.querySelector(".rotate-btn");
rotateBtn.addEventListener("click", () => {
  rotateBtn.style.transform = "rotate(45deg)";
  setTimeout(() => rotateBtn.style.transform = "rotate(0deg)", 500);
});

// Expanding the button
const expandBtn = document.querySelector(".expand-btn");
expandBtn.addEventListener("click", () => {
  expandBtn.style.transform = "scale(1.2)";
  setTimeout(() => expandBtn.style.transform = "scale(1)", 500);
});
