console.log('i am a string' + ' yeah!')
console.log(10 % 2) // se divido 10/2 qual'è il resto? è zero

let theBool = true
theBool = false  // con let puoi cambiare valore ad una variable cambiato il valore della variabile DOPO averla creata

const myConstant = 'variabile immutabile'
console.log(myConstant)

console.log(theBool)

function logger () {
  console.log('logged')
}
logger()

function add (number1, number2) {
  console.log('prima:' + (number1 + number2) + ' seconda:' + (number1 * number2))
}

add(2, 5)

// arrow functions

// return si va a sostituire all'argomento della funzione
// funzione senza argomenti, che viene però popolato dal return
const ten = () => {
  return 11
}
console.log(ten())

// return implicito: c'è perché la funzione non ha {} ed è scritta su una riga

// funzione con un argomento
const oneArgument = argo1 => 10000
console.log(oneArgument())

// funzione con due argomenti
const logger2 = (arg1, arg2) => arg1 + arg2
console.log(logger2(1, 1))
/*
  let thing = "primo let"
  let thing = "secondo let"
  console.log(thing) <-- errore
*/

// scopes
function outerFn () {
  const outerVar = `I'm the outer function!`
  return function innerFn () {
    const innerVar = `I'm the inner function!`
  }
}

outerFn()()
