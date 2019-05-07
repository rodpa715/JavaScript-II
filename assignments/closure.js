// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const outside = "I am global, I am god, omnipresent at all times, but I can't see what's inside"
console.log(outside)
function house(){
  const livingRoom = "I am locked inside the house but can see outside, but not the closet"
  console.log(outside)
  console.log(livingRoom)
  function closet(){
    const tshirt = "I locked insite the closet but can see into the living room and outside"
    console.log(outside)
    console.log(livingRoom)
    console.log(tshirt)
  }
  closet();
}
house()

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
