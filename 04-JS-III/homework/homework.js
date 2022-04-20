// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i = 0; i < array.length; i++){
    array[i] += 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  saludo = "";
  for(let i = 0; i < palabras.length; i++){
    if(i<palabras.length - 1){
      saludo += palabras[i] + " ";
    }else{
      saludo += palabras[i];
    }
    
  }
  return saludo;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  
  let esta  = false;

  for(let i = 0; i < array.length; i++){
    
    if(array[i] === elemento){
      esta = true;
      break;
    }else{
      esta = false;
    }
  }
  return esta;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let total = 0;
  for(let i = 0; i< numeros.length; i++){
    total += numeros[i];
  }
  return total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let total = 0;
  for(let i = 0; i<resultadosTest.length; i++){
    total += resultadosTest[i];
  }
  let promedio = total / resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let numeroMasGrande = 0;
  for(let i = 0; i< numeros.length; i++){
    if(numeroMasGrande < numeros[i]){
      numeroMasGrande = numeros[i];
    }else{
      numeroMasGrande = numeroMasGrande;
    }
  }
  return numeroMasGrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let resultado = arguments[0];
  if(resultado !== undefined){
    for(let i = 1; i< arguments.length; i++){
      resultado = resultado * arguments[i];
    }
    return resultado;
  }else{
    return 0;
  }
}
function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  contador = 0;
  for(let i = 0; i< arreglo.length; i++){
    if(arreglo[i] > 18){
      contador += 1;
    }
  }
  return contador;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 7 || numeroDeDia === 1){
    return "Es fin de semana";
  }else{
    return "Es dia Laboral";
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let cadena = n.toString();
  if(cadena.charAt(0) === `9`){
    return true;
  }else{
    return false;
  }

  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  let comprobante = true;  
  let numeroAnterior = arreglo[0];
 for(let i = 0; i< arreglo.length; i++){

  if(numeroAnterior === arreglo[i]){
    comprobante = true;
  }else{
    comprobante = false;
    break;
  }
  numeroAnterior = arreglo[i];
 }
 return comprobante;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses = [];
  posicionAr = 0;
  estanTodos = false;
  for(let i = 0; i< array.length; i++){
    if(array[i] === "Enero" ||array[i] === "Marzo"|| array[i] === "Noviembre"){
      meses[posicionAr] = array[i];
      posicionAr++;
    }else{

    }
  }

  if(meses.length === 3){
    estanTodos = true;
  }else{
    estanTodos = false;
  }

  if(estanTodos === true){
    return meses;
  }else{
    return "No se encontraron los meses pedidos"
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  mayoresQueCien = [];
  posicionAr2 = 0;
  for(let i = 0; i<array.length; i++){
    if(array[i] > 100){
      mayoresQueCien[posicionAr2] = array[i];
      posicionAr2++;
    }else{

    }
  }
  return mayoresQueCien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let valores = [];
  let vuelta = 0;
  do{
    numero += 2;
    valores[vuelta] = numero;
    vuelta++;
    if(numero === vuelta){
      return "Se interrumpió la ejecución";
      break;
    }else{

    } 

  }while(vuelta < 10);
  return valores;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  valores2 = [];
  posicionAr3 = 0;
  for(let i = 0; i < 10; i++){
    if(i !== 5){
      numero += 2;
      valores2[posicionAr3] = numero;
      posicionAr3++;
    }else{
      continue;
    }
  }
  return valores2;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
