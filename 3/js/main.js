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
