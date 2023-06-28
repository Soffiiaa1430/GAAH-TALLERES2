/*1. Dado el arreglo [1,2,3,4,5,6]:
a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
d) Calcular el promedio de todos los elementos del arreglo 


a)

let arreglo = [1, 2, 3, 4, 5, 6];
let indice = 0;

    while (indice < arreglo.length) {
        console.log(arreglo[indice]);
        indice++;
    }
    

    */
/*

b)
let numeros = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}

c)
let arr = [1, 2, 3, 4, 5, 6];
let copiaArr = [];

for (let index = 0; index < arr.length; index++) {
    copiaArr.push(arr[index] + 1);
}
console.log(copiaArr);*

d)

let array = [1, 2, 3, 4, 5, 6];
let suma = 0;
for (let index = 0; index < array.length; index++) {
   suma = suma + array[index];
    
}*/


/*2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
(cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
elementos del arreglo.*/

/*

let array = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"]

function baseUnica(array) {
    let A = ""
    let G = ""
    let C = ""
    let T = ""
    for (let index = 0; index < array.length; index++) {
        for (let i = 0; i < array[index].length; i++) {
            if (array[index][i] == 'A') {
                A += 'A'
            }
            if (array[index][i] == 'C') {
                C += 'C'
            }
            if (array[index][i] == 'G') {
                G += 'G'
            }
            if (array[index][i] == 'T') {
                T += 'T'
            }
        }

    }
    let mensaje = ` Las cadenas de una sola base que se pueden formar con el arreglo dado son: \n${A} \n${T} \n${C} \n${G}`
    return mensaje
}
let prueba = baseUnica(array)
console.log(prueba);
*/
/*
3.Cree una función que reciba un arreglo de números y retorne el número menor entre todos los
elementos del arreglo.

 let Num = [3,8,7,5,8,9];
function encontrar(Num) {
    
    if (Num.length === 0) {
      return null;
    }
  
    let menor = Num[0];
  
    for (let index = 1; index < Num.length; index++) {
      if (Num[index] < menor) {
        menor = Num[index];
      }
    }
  
    return menor;
  }
  let NumeroMenor = encontrar(Num);
  console.log(NumeroMenor);


  4. Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en
él


let Num = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarNumerosPrimos(Num) {
    function esPrimo(numero) {
      if (numero <= 1) {
        return false;
      }
  
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }
      }
  
      return true;
    }
  
    let Primos = [];
  
    for (let i = 0; i < Num.length; i++) {
      let numero = Num[i];
      if (esPrimo(numero)) {
        Primos.push(numero);
      }
    }
  
    return Primos;
  }

  let Primos = mostrarNumerosPrimos(Num);
  console.log(Primos);

  5. Cree una función que pida a n número de usuarios su nombre
   y edad y retorne un arreglo con los
nombres de los usuarios que son mayores de edad, luego muestre cuantos
 usuarios hay mayores de
edad
  
function Usuarios() {
    let MayoresEdad = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad de usuarios:"));
  
    for (let index = 0; index < cantidad; index++) {
      const nombre = prompt("Ingrese el nombre del usuario:");
      const edad = parseInt(prompt("Ingrese la edad del usuario:"));
  
      if (edad >= 18) {
        MayoresEdad.push(nombre);
      }
    }
  
    console.log("Los usuarios mayores de edad son:", MayoresEdad);
    console.log("Cantidad de usuarios mayores de edad:", MayoresEdad.length);
  
    return MayoresEdad;
  }
  
  
  let MayoresEdad = Usuarios();
  
  6. Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
“Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
queden en el arreglo que les corresponde. Use ciclos.

let valle = ["Cali", "Tulua", "Cartago", "Salento"];
let quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"];

let vOrdenado = [];
let qOrdenado = [];

// Ordenar el arreglo valle
let valleCiudades = ["Cali", "Cartago", "Tulua", "Palmira"];
for (let i = 0; i < valleCiudades.length; i++) {
  let ciudad = valleCiudades[i];
  for (let j = 0; j < valle.length; j++) {
    if (valle[j] === ciudad) {
      vOrdenado.push(ciudad);
      break;
    }
  }
}

// Ordenar el arreglo quindio
let quindioCiudades = ["Salento", "Armenia", "Cordoba", "Circasia"];
for (let i = 0; i < quindioCiudades.length; i++) {
  let ciudad = quindioCiudades[i];
  for (let j = 0; j < quindio.length; j++) {
    if (quindio[j] === ciudad) {
      qOrdenado.push(ciudad);
      break;
    }
  }
}

console.log("Valle :", vOrdenado);
console.log("Quindío :", qOrdenado);

7. Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,
“Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y
verduras) queden en el arreglo que les corresponde. Use ciclos.


let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let frutas = [];
let verduras = [];

// Ordenar el arreglo arreglo1
for (let index = 0; index < arreglo1.length; index++) {
  let elemento = arreglo1[index];
  if (esFruta(elemento)) {
    frutas.push(elemento);
  } else {
    verduras.push(elemento);
  }
}

// Ordenar el arreglo arreglo2
for (let index = 0; index < arreglo2.length; index++) {
  let elemento = arreglo2[index];
  if (esFruta(elemento)) {
    frutas.push(elemento);
  } else {
    verduras.push(elemento);
  }
}

console.log("Frutas ordenadas:", frutas);
console.log("Verduras ordenadas:", verduras);

// Función para verificar si un elemento es una fruta
function esFruta(elemento) {
  let frutasLista = ["Manzana", "Banano", "Pera", "Limón"];
  return frutasLista.includes(elemento);
}



8. Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se le
debe pedir al usuario que introduzca el arreglo

let ingresar = prompt("Ingrese los elementos del arreglo separados por comas:");

function encontrar(ingresar) {
    let arreglo = [];
    let numeroMayorActual = "";

    for (let i = 0; i < ingresar.length; i++) {
        if (ingresar[i] !== ",") {
            numeroMayorActual += ingresar[i];
        } else {
            arreglo.push(parseFloat(numeroMayorActual));
            numeroMayorActual = "";
        }
    }

    arreglo.push(parseFloat(numeroMayorActual));

    let mayor = arreglo[0];

    for (let index = 1; index < arreglo.length; index++) {
        if (arreglo[index] > mayor) {
            mayor = arreglo[index];
        }
    }

    return mayor;
}

let NumeroMayor = encontrar(ingresar);
console.log(NumeroMayor);*/

/*

  9. Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un
promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos.



function proM(arreglo1, arreglo2) {
  let promedio1 = calcularPromedio(arreglo1);
  let promedio2 = calcularPromedio(arreglo2);

  if (promedio1 > promedio2) {
    console.log("El primer arreglo tiene un promedio mayor:", promedio1);
  } else if (promedio2 > promedio1) {
    console.log("El segundo arreglo tiene un promedio mayor:", promedio2);
  } else {
    console.log("Ambos arreglos tienen el mismo promedio:", promedio1);
  }
}

function calcularPromedio(arreglos) {
  let suma = 0;

  for (let index = 0; index < arreglos.length; index++) {
    suma += arreglos[index];
  }

  return suma / arreglos.length;
}

let AR1 = prompt("Ingrese los elementos del arreglo separados por comas:");
let AR2 = prompt("Ingrese los elementos del arreglo separados por comas:");

let arreglo1 = [];
let arreglo2 = [];

let numeroActual1 = "";
for (let i = 0; i < AR1.length; i++) {
  if (AR1[i] !== ",") {
    numeroActual1 += AR1[i];
  } else {
    arreglo1.push(parseFloat(numeroActual1));
    numeroActual1 = "";
  }
}
arreglo1.push(parseFloat(numeroActual1));

let numeroActual2 = "";
for (let i = 0; i < AR2.length; i++) {
  if (AR2[i] !== ",") {
    numeroActual2 += AR2[i];
  } else {
    arreglo2.push(parseFloat(numeroActual2));
    numeroActual2 = "";
  }
}
arreglo2.push(parseFloat(numeroActual2));

proM(arreglo1, arreglo2);


    10. Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se
encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se
encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que
introduzca el arreglo.
*/
/*
let nombres = prompt("Ingrese nombres separados por comas");

function usuarios(nombres) {
    let arreglo = [];
    let nombreActual = "";

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] !== ",") {
            nombreActual += nombres[i];
        } else {
            arreglo.push(nombreActual);
            nombreActual = "";
        }
    }

    arreglo.push(nombreActual);

    let acumulador = 0;
    console.log(arreglo);

    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index].includes("c")) {
            acumulador++;
            console.log("La letra c se encuentra en el nombre: " + arreglo[index]);
        } else {
            console.log("La letra c no se encuentra en el nombre: " + arreglo[index]);
        }
    }

    console.log("La letra c se encuentra en " + acumulador + " nombres.");

    return nombres;
}

usuarios(nombres);*/
/*

 11. Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números
impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo.




let agregar = prompt("Ingrese números enteros separados por comas:");

function impar() {
  let arreglo = [];
  let numeroActual = "";

  for (let i = 0; i < agregar.length; i++) {
    if (agregar[i] !== ",") {
      numeroActual += agregar[i];
    } else {
      arreglo.push(parseInt(numeroActual));
      numeroActual = "";
    }
  }

  arreglo.push(parseInt(numeroActual));

  console.log(arreglo);

  let acumulador = 0;

  for (let index = 0; index < arreglo.length; index++) {
    if (arreglo[index] % 2 !== 0) {
      acumulador++;
    }
  }

  if (acumulador > 0) {
    console.log("El arreglo contiene números impares");
    console.log("El arreglo contiene " + acumulador + " números impares");
  } else {
    console.log("El arreglo no contiene números impares");
  }

  return arreglo;
}

impar();




12. Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las
letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número
de Timina (T). Se le debe pedir al usuario que introduzca los arreglos



function encontrarMayorTimina() {
  let numCadenas = parseInt(prompt("Introduce el número de cadenas de ADN:"));
  let cadenasADN = [];


  for (let i = 0; i < numCadenas; i++) {
    let cadena = prompt("Introduce la cadena de ADN #" + (i + 1) + ":");
    cadenasADN.push(cadena);
  }


  let mayorTimina = "";
  let maxNumTimina = 0;

  for (let i = 0; i < cadenasADN.length; i++) {
    let cadena = cadenasADN[i];
    var numTimina = (cadena.match(/T/g) || []).length;

    if (numTimina > maxNumTimina) {
      mayorTimina = cadena;
      maxNumTimina = numTimina;
    }
  }


  console.log("La cadena de ADN con mayor número de Timina (T) es:");
  console.log(mayorTimina);
}


encontrarMayorTimina();



13.Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne ordenado de
menor a mayor según el valor de tales elementos. Se le debe pedir al usuario que introduzca el arreglo.

function ordenarArreglo() {
  var input = prompt("Introduce el arreglo de números separados por comas (ejemplo: 1, 5, 2, 9):");
  var numeros = [];
  var numeroActual = "";


  for (let i = 0, len = input.length; i < len; i++) {
    var caracter = input[i];
    
    
    if (caracter === ",") {
      numeros.push(parseInt(numeroActual));
      numeroActual = "";
    }
   
    else if (caracter >= "0" && caracter <= "9") {
      numeroActual += caracter;
    }
  }

  
  numeros.push(parseInt(numeroActual));

  
  for (let  i = 0; i < numeros.length - 1; i++) {
    for (let j = 0; j < numeros.length - 1 - i; j++) {
      if (numeros[j] > numeros[j + 1]) {
        let temp = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temp;
      }
    }
  }

  
  return numeros;
}


var arregloOrdenado = ordenarArreglo();
console.log(arregloOrdenado);



14. Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado alfabéticamente.
Se le debe pedir al usuario que introduzca el arreglo.


function ordenarArreglo() {
  var input = prompt("Introduce el arreglo de letras separadas por comas (ejemplo: a, c, b, e):");
  var letras = [];
  var letraActual = "";


  for (let i = 0; i < input.length; i++) {
    let caracter = input[i];
    
   
    if (caracter === ",") {
      letras.push(letraActual);
      letraActual = "";
    }
   
    else if (caracter !== " ") {
      letraActual += caracter;
    }
  }

  letras.push(letraActual);


  for (let i = 0; i < letras.length - 1; i++) {
    for (let j = 0; j < letras.length - 1 - i; j++) {
      if (letras[j] > letras[j + 1]) {
        let temp = letras[j];
        letras[j] = letras[j + 1];
        letras[j + 1] = temp;
      }
    }
  }


  return letras;
}


var arregloOrdenado = ordenarArreglo();
console.log(arregloOrdenado);
*/