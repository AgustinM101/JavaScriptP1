
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

// actividad Practica 2.4 

let password = 12345; // sabiendo que solo esta compuesta de numeros 
i=null;

while (!(i===password)) {
    let passwordIn = Number (prompt("Introduce tu contraseña: "));

    if (password === passwordIn) {

        i=passwordIn;
        console.log("Contraseña exitosa");

    } else {
        i++;
        console.log("Contraseña erronea");
    }
}

// actividad Practica 3.5
    let nombre = String(prompt("Introduce nombre:"));
    let apellido = String(prompt("Introduce apellido:"));

function mostrarNombreYApellido(a,b) { 
    let edad = String(prompt("Introduce edad:"));
    alert("El nombre ingresado es: "+a);
    alert("El apellido ingresado es: "+b);
    alert("La edad ingresada es: "+edad);
}

console.log(mostrarNombreYApellido);

const concatenarNombreApellido = (a,b) => a+b;
let nombreYApellido = concatenarNombreApellido(nombre,apellido);

function MostrarDatos() {
    console.log("Nombre y apellido: "+nombreYApellido);
}

console.log(MostrarDatos);
