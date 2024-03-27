// Write your solution here!
let cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push('Ralph');
}
function destructivelyPrependCat(name){
  cats.unshift('Bob');
}
function destructivelyRemoveLastCat(name){
cats.pop();
}
function destructivelyRemoveFirstCat(name){
  cats.shift();
}
function appendCat(name){
  const newCatsArray=cats.concat('Broom');
  return newCatsArray;
}
function prependCat(name){
  const newCatsArray=['Arnold',...cats];
  return newCatsArray;
}
function removeLastCat(){

return cats.slice(0,2);
}
function removeFirstCat() {

 return cats.slice(1,3);
}
