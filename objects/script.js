// const cat = {
//     name:"Floppa", 
//     age:"6", 
//     img:"http://placekitten.com/200/300"};
// console.log(cat)

// let name = document.createElement("h1")
// name.innerHTML = cat.name;
// document.body.appendChild(name);
// let age = document.createElement("p")
// age.innerHTML = "Leeftijd: " + cat["age"];
// document.body.appendChild(age);
// let img = document.createElement("img")
// img.innerHTML = img.src = cat["img"];
// document.body.appendChild(img);

// opdracht:
const cat1 = {
    naam: "Kitty",
    geslacht: "V",
    leeftijd: 1,
    afbeelding: "https://placekitten.com/400/300",
}
const cat2 = {
    naam: "Boris",
    geslacht: "M",
    leeftijd: 2,
    afbeelding: "https://placekitten.com/401/300",
}
const cat3 = {
    naam: "Dexter",
    geslacht: "M",
    leeftijd: 7,
    afbeelding: "https://placekitten.com/402/300",
}
const cat4 = {
    naam: "Neeltje",
    geslacht: "V",
    leeftijd: 6,
    afbeelding: "https://placekitten.com/403/300",
}
var outCat1 = Object.keys(cat1)
var outCat2 = Object.keys(cat2)
var outCat3 = Object.keys(cat3)
var outCat4 = Object.keys(cat4)

console.log(outCat1);
console.log(outCat2);
console.log(outCat3);
console.log(outCat4);
