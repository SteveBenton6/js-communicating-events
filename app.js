// Example 1 -  Intro to DOM Events
console.log("\nSECTION 1 - Intro to DOM Events");
// No Code

// Example 2 -  2 Ways NOT to Add Events
console.log("\nSECTION 2 - 2 Ways NOT to Add Events");

// Selecter Clicker Button and create Event
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
  document.body.style.bckgroundColor = "green";
});

// Example 5 -  Events on Multiple Elements
console.log("\nSECTION 5 - Events on Multiple Elements");
// No Code

// Example 6 -  The Event Object
console.log("\nSECTION 6 - The Event Object");

// Example 7 -  Key Events: keypress, keyup & keydown
console.log("\nSECTION 7 - Key Events: keypress, keyup & keydown");

// Example 8 -  Coin Game Demo
console.log("\nSECTION 8 - Coin Game Demo");

// Example 9 -  Form Events & PreventDefault
console.log("\nSECTION 9 - Form Events & PreventDefault");

// Example 10 -  Input & Change Events
console.log("\nSECTION 10 - Input & Change Events");
