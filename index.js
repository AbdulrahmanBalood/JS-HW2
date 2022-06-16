let c1 = {
  name: "name",
  height: 100,
  gender: "F",
  mass: 20,
  eyeColor: "black",
};
let c2 = {
  name: "name2",
  height: 150,
  gender: "M",
  mass: 101,
  eyeColor: "blue",
};
let characters = [];

function addCharacter(character) {
  characters.push(character);
}

addCharacter(c1);
addCharacter(c2);
// Arrays
// create an array of characters that has these properties (name, height, gender, mass, eye color)

// MAP
// Get array of objects with just name and height properties
let props = [];
let allNames = characters.map((character) => {
  props.push(character.name);
  props.push(character.height);
});
console.log(props);

// Get array of all first names
let allFirstNames = characters.map((character) => {
  console.log(character.name);
});

// REDUCE

// Get total mass of all characters
let totalMass = characters.reduce(
  (totalMass, character) => (totalMass += character.mass),
  0
);
console.log(totalMass);
// Get total number of characters in all the character names
let resultChars = [];
let totalChars = "";
let noSpaceNames = "";
let totalCharsNames = characters.reduce((totalCharsNames, character) => {
  resultChars.push(character.name);
  totalChars = resultChars.join().trim(" ");
  noSpaceNames = totalChars.replace(/ /g, "");
});
console.log(noSpaceNames.length);
// FILTER
// Get characters with mass greater than 100
let massFilter = characters.filter((character) => character.mass > 100);
console.log(massFilter);
// Get all female characters
let femaleChars = characters.filter((character) => character.gender === "F");
console.log(femaleChars);

// SORT
// Sort by name
let sortByName = characters.sort(function (a, b) {
  return b.name - a.name;
});
console.log(sortByName);
// Sort by gender
let sortByGender = characters.sort(function (a, b) {
  return b.gender - a.gender;
});
console.log(sortByGender);
// EVERY
// Does every character have blue eyes?
let everyEyes = characters.every((character) => character.eyeColor === "blue");
console.log(everyEyes);
// Is every character male?
let everyMaleResult = characters.every((character) => character.gender === "M");
console.log(everyMaleResult);
// SOME
// Is there at least one male character?
let someMaleResult = characters.some((character) => character.gender === "M");
console.log(someMaleResult);
// Is there at least one character that has mass less than 50?
let someMass = characters.some((character) => character.mass < 50);
console.log(someMass);
