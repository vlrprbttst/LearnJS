const globalVar = 'i\'m a global var'
console.log(globalVar)

{
  const blockScopeVar = 'i\'m a block scoped var'
  console.log(blockScopeVar)
}

const functionScope = function () {
  let functionScopedVar = 'imma function scoped var'
  console.log(functionScopedVar)
}

functionScope()

// CLOSURE
function outer () {
  const outerVar = 'woohoo'
  return function inner () {
    const magicNumber = ' it\'s magic!'
    console.log('hello imma closure i think' + magicNumber + ' ' + outerVar)
  }
}

const outerFunction = outer()

outerFunction()

// objects

const computer = {
  keyboard: 'yes',
  'ports of computer': 'loadss'
}
console.log(computer.keyboard)
console.log(computer['ports of computer'])

const computerKeyboardAvailability = computer.keyboard
const computerPortsNumber = computer['ports of computer']

console.log(computerKeyboardAvailability + ' ' + computerPortsNumber)

const methodExample = {
  myMeth: function (isItBad) {
    console.log('meth' + isItBad)
  }
}

methodExample.myMeth(' is bad')
