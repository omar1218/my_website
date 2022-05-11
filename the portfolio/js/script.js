var random = Math.ceil(Math.random() * 6);
var guess = prompt("I am thinking of a number between 1 and 6, can you guess it?");
if(parseInt(guess) === random){
  document.write("<p>you guessed the right number, yay!</p>");
}else{
  document.write("<p>sorry wrong number, it was (" + random + "), sucks to be you!</p>");
}