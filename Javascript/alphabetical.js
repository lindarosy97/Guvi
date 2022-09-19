// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];

var friends2 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];
var friend=friends1.concat(friends2);
console.log(friend.sort());
  //end-here
});
