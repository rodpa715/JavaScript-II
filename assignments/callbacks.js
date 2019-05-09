// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/*

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function logger(arg){ //logger for console
  console.log(arg)
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  const len = arr.length;
  cb(`The length of the array is: ${len}`);
}
getLength(items, logger)


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(`The last item of the array is: ${arr[arr.length - 1]}`);
}
last(items, logger)

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x +y);
}
sumNums(3,3, logger)

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}
multiplyNums(2,10, logger)

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item))
}
contains("Gum", items, logger)
/* STRETCH PROBLEM */

let newItems = [1,2,3,4,2,5,4,4,5,6,5,8,7,4,8]
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
    let newArray = array.filter((item,index) => newItems.indexOf(item) >= index)
    cb(newArray);
}
removeDuplicates(newItems, logger)
