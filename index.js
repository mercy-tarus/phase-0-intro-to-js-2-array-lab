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

let newCats= [...cats]
newCats.pop();
return newCats;

}
function removeFirstCat() {

  let newCats = [...cats];
 
  newCats.shift();
  return newCats;
}
