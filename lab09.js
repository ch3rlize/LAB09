let arr = ["Harry","Hermione","Ron","Draco","Luna"]
console.log("Harry");
console.log("Hermione");
console.log("Ron")
console.log("Draco");
console.log("Luna");

let firstName="Harry";
let house='Welcome ${firstname} Gryffindor,!';
console.log("house")


let characterName="Hermione";
console.log("toUppercase(0):",characterName.toUpperCase);
console.log("toLowercase(0):",characterName.toLowerCase);


let spell="Expelliarmus!";
console.log("trim()question:", `${spell.trim()}`);

let quote="I solemnly swear that I am up to no good"
console.log("slice(11,17):", quote.slice(11,17));

let firstname= "Ron"
let lastname = "Weasly";
let combined=firstname.concat('',lastname);

let Draco="Draco is a good wizard"
let replaceDraco = Draco.replace("good","bad");
console.log("replace()question:", replaceDraco);

let houses=["Gryffindor","Hufflepuff","Ravenclaw"];
houses.push("Slytherin");
houses.pop();
console.log("houses");

let spells = ["Alohomora","Lumos","Nox"];
spells.unshift("Accio");
spells.shift();
console.log("spells")

let proffesors = ["Dumbleodre","McGonagall","Snape","Hagrid"];
let selectedProfessors = professors.slice(1,3);
console.log("selectedProfessors")

let students = ["Neville", "Seamus","Dean","Pavarti"];
students.splice(1,2);
console.log("students")

let phrase ="Mischief Managed";
let resule = phrase.trim().toLowerCase().concat('-Harry')