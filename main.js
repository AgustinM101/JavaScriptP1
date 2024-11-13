/*
console.log("hola")
let nombre = "Nacho\n Basilio"
console.log(nombre)
let edad = 26
let esMayor = edad >= 18
console.log(esMayor)
let casado = false
nombreDeGato = "Rengar"
console.log(nombreDeGato)
const PI = 3.1416
const URL = "www.google.com"
console.log(edad)
edad = "Nacho"
console.log(edad)
let nombre1 = prompt("Como te llamas?")
alert("hola, " + nombre1)
let confirmacion = confirm("Quieres seguir navegando?")
let edad1 = parseInt(prompt("Cuantos anos tienes?"))
let edad2 = Number(prompt("Cuantos anos tienes?"))
console.log(typeof NaN)
console.log(isNaN(NaN))
*/
const titulo = document.getElementById("titulo");

titulo.textContent = "Hola Mundo";
titulo.style.color = "red";
titulo.style.fontSize = "54px";

let peso = Number (prompt("Introduce tu peso en kilogramos: "))

let altura = Number (prompt("Introduce tu altura en metro: "))

let imc = peso / (altura * altura) 

alert("Tu indice de masa corporal es de: " + imc.toFixed(2))