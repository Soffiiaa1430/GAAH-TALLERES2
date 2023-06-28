/*a) Dado el arreglo let edades = [20, 16, 19, 17, 20,
    18, 22, 17] complete donde aparecen las rayas
    ( ____ ) para contar y mostrar cuántas edades
    dentro del arreglo corresponden a mayores de
    edad:
    let edades = [20, 16, 19, 17, 20, 18, 22, 17]
   let mayores = 0
   for (let index = 0; index < edades.length; index++) {
    if (edades[index] >= 18) {
        mayores++;

    }
}

console.log(mayores);
    console.log(mayores)
    b)Dado el arreglo let datos = [20, 33, 67, 4, 60]
    complete donde aparecen las rayas ( ____ ) para
    mostrar el promedio de los elementos del arreglo:
 let datos = [20, 33, 67, 4, 60];
let contador = 0
let suma = 0
while (contador <datos.length) {
 suma = suma + datos[contador];
 contador++
}
console.log(suma / datos.length)
    */

/* Shilrley trabaja como
programadora en la empresa Data East
programando videojuegos. Ella requiere una
función que reciba como argumentos los arreglos
[“s”, “w”, “@”, “3”, “a”, “p”] y [“#”, “p”, “a”, “z”, “@]
y retorne un arreglo con los elementos que se
repiten en ambos, emparejados como una cadena,
en este caso: [“@@”, “aa”, “pp”].
Cree la función que requiere Shirley.



function RP(arreglo1, arreglo2) {

    let elementosRepetidos = [];
    for (let index = 0; index < arreglo1.length; index++) {
        let elemento = arreglo1[index];
        for (let j = 0; j < arreglo2.length; j++) {
            let elemento2 = arreglo2[j]
            if (elemento === elemento2) {
                let suma = elemento + elemento2;
                elementosRepetidos.push(suma);
                break;
            }
        }

    }
    return elementosRepetidos;
}
let arreglo1 = ["s", "x", "@", "3", "a", "p"];
let arreglo2 = ["#", "p", "a", "z", "@"];


let resultado = RP(arreglo1, arreglo2);
console.log(resultado);


3. Valor (1 punto) Mariana, que trabaja en la
empresa BioGenetics S.A, requiere una función que
pida al usuario un arreglo con cuatro cadenas de
ADN como elementos, cada cadena debe ser de
logitud 7. Un ejemplo de un arreglo ingresado por
el usuario sería: [“AATGAAC”, “GTTTTTC”,
“GGTAAAT”, “CCCCATG”]) .Luego de obtener el
arreglo del usuario, muestre cuál es la base que más
se repite en tales cadenas que forman el arreglo.
Recuerde que una cadena de ADN puede contener
las cuatro bases químicas, solo tres bases, solo dos
bases o solo una base, por ejemplo:
“AGTTCCAT” cadena formada por 4 bases
“ATTAGATC” cadena formada por 3 bases
“AATTTATA” cadena formada por 2 bases
“CCCCCCC” cadena formada por 1 base




function baseADN() {
    let arreglo = [];


    for (let index = 0; index < 4; index++) {
        let cadena = "";

        while (cadena.length !== 7) {
            cadena = prompt("Ingresa la cadena de ADN #" + (index + 1) + " (longitud 7):").toUpperCase();
            if (cadena.length !== 7) {
                alert("La cadena de ADN debe tener una longitud de 7 caracteres.");
            }
        }
        arreglo.push(cadena);
    }

    let validacion = true;

    for (let index = 0; index < arreglo.length; index++) {
        for (let j = 0; j < arreglo[index]; j++) {
          
            
       
        if (arreglo[index][j] !== "A" && arreglo[index][j] !== "C" && arreglo[index][j] !== "T" && arreglo[index][j] !== "G") {
            validacion = false;
        } 
        
        }
    }

    if (!validacion) {
        console.log("una o mas cadenas contienen caracteres invalidos.");
        return arreglo;
}
    let A = 0;
    let C = 0;
    let T = 0;
    let G = 0;

    for (let index = 0; index < arreglo.length; index++) {
        for (let j = 0; j < arreglo[index].length; j++) {
            if (arreglo[index][j] == "A") {
                A++;
            }
            if (arreglo[index][j] == "C") {
                C++;
            }
            if (arreglo[index][j] == "T") {
                T++;
            }
            if (arreglo[index][j] == "G") {
                G++;
            }

        }

    }
    if (A>C && A>T && A>G) {
        console.log("la base que mas se repite es A");
    }
    if (C>A && C>T && C>G) {
        console.log("la base que mas se repite es C");
    }
    if (T>A && T>C && T>G) {
        console.log("la base que mas se repite es T");
    }
    if (G>A && G>T && G>C) {
        console.log("la base que mas se repite es G");
    }

    return arreglo;
}



let resultado = baseADN();
console.log("El arreglo de ADN ingresado por el usuario es:", resultado);



4.Pedro trabaja en una empresa
desarrolladora que está haciendo un software para
el cliente orbi (una empresa multinacional). Pedro
requiere una función que reciba como argumento
el arreglo de caracteres ["b", "p", "s", "z", "o", "b",
"a", "w", "r", “i”] y muestre si es posible formar la
palabra orbi con los elementos del arreglo.
.En caso de ser posible, quite los elementos del
arreglo que no sirven para formar la palabra orbi y
luego ordene el arreglo para que quede como el
siguiente: [“o”, “r”, “b”, “i”]. 
Cree la función que requiere Pedro. Haga el
análisis y luego codifique.



function formarPalabra(arr) {
  const caracteres = [...arr]; 
  const palabra = "orbi";
  const resultado = [];
  
  let index = 0;
  while (index < caracteres.length && resultado.length < 4) {
    const char = caracteres[index];
    let found = false;
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === char) {
        resultado.push(char);
        palabra[i] = ''; 
        found = true;
        break;
      }
    }
    if (!found) {
      index++;
    }
  }

  if (resultado.length !== 4) {
    return "No es posible formar la palabra orbi";
  }

  return resultado;
}

// Ejemplo de uso
const arreglo = ["b", "p", "s", "z", "o", "b", "a", "w", "r", "i"];
const resultado = formarPalabra(arreglo);
console.log(resultado);
*/