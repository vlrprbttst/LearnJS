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
