const iife = (function(){
    console.log("I'm deployed emmediatly before being called")
    return "I'm the value being returned"
})()

console.log(iife)