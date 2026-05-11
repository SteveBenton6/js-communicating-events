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
// No Code

// Example 4 -  The impossible Button Demo
console.log("\nSECTION 4 - The impossible Button Demo");
// No Code

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
