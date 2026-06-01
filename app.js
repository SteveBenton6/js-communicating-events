// Example 1 -  Intro to DOM Events
console.log("\nSECTION 1 - Intro to DOM Events");
// No Code

// Example 2 -  2 Ways NOT to Add Events
console.log("\nSECTION 2 - 2 Ways NOT to Add Events");

// Select Clicker Button and create Event
const buttClicker = document.querySelector("#clicker");
console.dir(buttClicker);
buttClicker.onclick = function () {
  console.log("Click!");
};
console.dir(buttClicker);
buttClicker.ondblclick = function () {
  console.log("Double Click!");
};

// Example 3 -  addEventListener
console.log("\nSECTION 3 - addEventListener");

//Detect Click on first button and run 3 different functions
const buttonh1 = document.querySelector("button");
buttonh1.addEventListener("click", () => {
  alert("1st - You clicked the button!");
});
buttonh1.addEventListener("click", () => {
  console.log("2nd - You clicked the button!");
});
buttonh1.addEventListener("mouseover", () => {
  buttonh1.innerText = "Stop Hovering Over Me!";
});
buttonh1.addEventListener("mouseout", () => {
  buttonh1.innerText = "Click Me!";
});
const buttonh2 = document.querySelector("#buttonTwo");
buttonh2.addEventListener("click", () => {
  alert("1st - You clicked the 2nd button!");
});
buttonh2.addEventListener("click", () => {
  console.log("2nd - You clicked the 2nd button!");
});
buttonh2.addEventListener("mouseover", () => {
  buttonh2.innerText = "Stop Hovering Over Me as Well!";
});
buttonh2.addEventListener("mouseout", () => {
  buttonh2.innerText = "Click 2 Me!";
});

// Example 4 -  The impossible Button Demo
console.log("\nSECTION 4 - The impossible Button Demo");

//  Create Button and move it randomly when mousedover - so can't be clicked!
const buttonImp = document.querySelector("#impossible");
console.dir(buttonImp);
buttonImp.addEventListener("mouseover", () => {
  console.log("Moused Over Me!");
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  buttonImp.style.left = `${width}px`;
  buttonImp.style.top = `${height}px`;
});
buttonImp.addEventListener("click", () => {
  buttonImp.innerText = "You Got Me!";
  document.body.style.backgroundColor = "green";
});

// Example 5 -  Events on Multiple Elements
console.log("\nSECTION 5 - Events on Multiple Elements");

// Create multiple colored boxes
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const changeColor = function () {
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
  console.log(this);
  console.log(this.style.backgroundColor);
};
const container = document.querySelector("#boxes");
for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);
  box.addEventListener("click", changeColor);
}

// Example 6 -  The Event Object
console.log("\nSECTION 6 - The Event Object");

// Detect keypress and display event object in console
const keyPress = document.body.addEventListener("keypress", (e) => {
  console.log(e);
});

// Example 7 -  Key Events: keypress, keyup & keydown
console.log("\nSECTION 7 - Key Events: keypress, keyup & keydown");

// Detect key events on the username Input
const input = document.querySelector("#username");
input.addEventListener("keydown", function (e) {
  console.log("Key Down!");
});
input.addEventListener("keyup", function (e) {
  console.log("Key Up!");
});
input.addEventListener("keypress", function (e) {
  console.log("Key Press!");
});

// Collect & Display items added to Shopping List Input
const addItemInput = document.querySelector("#addItem");
const itemsUL = document.querySelector("#items");

addItemInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!this.value) return;
    const newListItem = this.value;
    const newItem = document.createElement("li");
    newItem.innerText = newListItem;
    itemsUL.appendChild(newItem);
    this.value = "";
  }
});

// Example 8 -  Coin Game Demo
console.log("\nSECTION 8 - Coin Game Demo");

// See separate files:

// Example 9 -  Form Events & PreventDefault
console.log("\nSECTION 9 - Form Events & PreventDefault");

// Example 10 -  Input & Change Events
console.log("\nSECTION 10 - Input & Change Events");
