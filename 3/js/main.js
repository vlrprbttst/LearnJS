const valeriosArray = [
  'dog',
  'cat',
  'alien'
]

const people = [
  'Benjamin Franklin',
  'Thomas Edison',
  'Franklin Roosevelt',
  'Napolean Bonaparte',
  'Abraham Lincoln',
  'Mother Theresa',
  'Mahatma Gandhi',
  'Winston Churchill',
  'Charles Darwin',
  'Albert Einstein',
  'Pablo Picasso',
  'Ludwig Beethoven',
  'Walt Disney',
  'Henry Ford',
  'Steve Jobs'
]

people[12] = 'DisneyLand'

console.log(people[6])
const Pablito = people[people.length - 5]
console.log(Pablito)
console.log(people.indexOf('Pablo Picasso'))

const addKafy = people.concat(['Kafy'])
console.log(addKafy)

const inizioPeople = ['Alesis', 'Rupert', 'Gianzo']
const friendsAndPeople = inizioPeople.concat(addKafy)
console.log(friendsAndPeople)

// aggiungere me stesso in mezzo all'array
const firstPart = friendsAndPeople.slice(0, 10)
const myself = ['Valeriòne']
const secondPart = friendsAndPeople.slice(10)
const megaParty = [].concat(firstPart, myself, secondPart)
console.log(megaParty)
// togli il primo dalla lista
console.log(people.slice(1))
// togli l'ultimo dalla lista
console.log(people.slice(0, -1))

// if else statements

const james = 22
const valerie = 25
const kenneth = 27
const vale = 34

if (vale > james) {
  console.log('i am older then anybody else')
} else {
  console.log('i am younger')
}

if (vale < james) {
  console.log('i am older then james')
} else if (vale > valerie) {
  console.log('i am older then valerie')
}

if (vale === kenneth) {
  console.log('uguale a kenneth')
} else {
  console.log('no')
}

// truthy and falsey
const someValue = ''
if (someValue) {
  console.log('executed')
} else {
  console.log('not executed')
}

// arrays

const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

// for loop classico old school
// for (i = 0; i < numbers.length - 1; i++) {
//   console.log(i)
// }

// for loop ES6 nuovo dove la x può essere qualsiasi cosa e si riferisce ad ogni unità
for (let x of numbers) {
    // stampa ogni numero
  console.log(x)
}

// scegliere determinati oggetti di un array
// primo array con tutti gli elementi
const numbers2 = [103, 100, 102, 1, 2, 3, 4, 5]
// nuovo array dove finiranno gli elementi scelti, inizializzato con variabile let in modo da
// poter essere valorizzata dopo
let biggerThenFive = []
let biggerThenTen = []

for (let xxx of numbers2) {
  if (xxx > 5) {
    biggerThenFive = biggerThenFive.concat(xxx * 5)
  }
  if (xxx > 10) {
    biggerThenTen = biggerThenTen.concat(xxx)
  }
}
// lo usi fuori dal loop senno ti dà prima il primo numero, poi su una nuova riga quello di prima piu il secondo
console.log(biggerThenFive)
console.log(biggerThenTen)
