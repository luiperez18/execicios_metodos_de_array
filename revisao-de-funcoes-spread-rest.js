// Exercício 1: Revisão de funções, spread e rest

function addIsAdultProperty(person) {
  return {
    ...person,
    isAdult: person.age >= 18
  };
}

// Testando a função 
const youngPerson = { name: "João", age: 15 };
const adultPerson = { name: "Ana", age: 25 };

console.log(addIsAdultProperty(youngPerson)); 
// Deve mostrar { name: "João", age: 15, isAdult: false }

console.log(addIsAdultProperty(adultPerson)); 
// Deve mostrar { name: "Ana", age: 25, isAdult: true }

function combineArrays(...arrays) {
  return arrays.reduce((combined, currentArray) => [...combined, ...currentArray], []);
}

// Testando a função
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const arr3 = [6, 7, 8, 9];

console.log(combineArrays(arr1, arr2)); 
// Deve mostrar [1, 2, 3, 4, 5]

console.log(combineArrays(arr1, arr2, arr3)); 
// Deve mostrar [1, 2, 3, 4, 5, 6, 7, 8, 9]
