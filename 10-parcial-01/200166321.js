const datos = require("./datos.json");

/*
  Para correr este archivo, utilicen el comando
  $ node parcial1.js

  Para abrir el terminal desde la ubicacion de este folder, usen Ctrl + Shift + C.

  La variable importada "datos" contiene datos de estudiantes.
*/

function puntoUno(estudiantes) {
  // CODIGO DE PUNTO 1 AQUI
  let n_estudiantes_cond = 0
  let prom = 0
  let sum = 0

  for (let i = 0; i < estudiantes.length; i++){
      prom = 0
      n_cursos = estudiantes[i].cursos.length
      for (let j = 0; j < n_cursos; j++){
        sum += estudiantes[i].cursos[j].nota
      }
      prom = sum/n_cursos
      if (prom < 3.3){
        n_estudiantes_cond += 1
      }
  }
  return n_estudiantes_cond;
}

function puntoDos(estudiantes) {
  // CODIGO DE PUNTO 2 AQUI
  let nombres = []
  let nombre_completo = ""

  for (let i = 0; i < estudiantes.length; i++){
    nombre_completo = estudiantes[i].nombre + " " + estudiantes[i].apellido
    nombres.push(nombre_completo)
  }
  return nombres;
}

function puntoTres(estudiantes) {
  // CODIGO DE PUNTO 3 AQUI
  let ids =[]

  estudiantes.sort((a,b) => a.altura - b.altura)

  for (let i = 0; i < estudiantes.length; i++){
    ids.push(estudiantes[i]._id)
  }

  return ids;
}

function puntoCuatro(numeros) {
  // CODIGO DE PUNTO 4 AQUI
  let sum = 0 
  let prom = 0 
  let n = numeros.length

  for (let i = 0; i < n; i++){
    sum += numeros[i]
  }

  prom = sum/n
  return prom;
}

function puntoCinco(palabra) {
  // CODIGO DE PUNTO 5 AQUI
  palabra = palabra.toLowerCase()
  palabra = palabra.trim()

  let pal = false
  let reversed = palabra.split("").reverse().join("")

  if (palabra === reversed){
    pal = true
  }

  return pal;
}

function puntoSeis(palabra) {
  // CODIGO DE PUNTO 6 AQUI
  let reversed = palabra.split("").reverse().join("")

  return reversed;
}

// CODIGO DE PUNTO 7 AQUI
function puntoSiete(datos, campo) {
  datos.sort((a,b) => a.campo - b.campo)

  return datos;
  
}

console.log(puntoUno(datos))
console.log(puntoDos(datos))
console.log(puntoTres(datos))
console.log(puntoCuatro([1,2,3,4,5,6]))
console.log(puntoCinco("salas"))
console.log(puntoSeis("reverso"))
console.log(puntoSiete(datos,"altura"))



