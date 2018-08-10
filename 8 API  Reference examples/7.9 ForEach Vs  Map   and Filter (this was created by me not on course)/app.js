// ForeEach Vs Map 

//  forEach() — executes a provided function once for each array element
//  forEach() affects and changes our original Array, 
//
//
// map() — creates a new array with the results of calling a provided function on every element in the calling array.
// map()   returns an entirely new Array — thus leaving the original array unchanged.



// Example 1  -------- -------------------------------------->


// forEach 
let arr = [1, 2, 3, 4, 5];

arr.forEach((num, index) => {
  return arr[index] = num * 2;
});

// Warning notice that this chages the original array 
console.log(arr);



//  Map
let arr2 = [1, 2, 3, 4, 5];

let doubled = arr2.map(num => {
  return num * 3;
});

// Warning it doesnt chage the original array (arr2) instead it creates a new one and calls it doubled
console.log(doubled);










// Example 2  -------- -------------------------------------->

//forEach 

let arr3 = ['a', 'b', 'c', 'd'];

arr3.forEach((letter) => {
    console.log(letter);
});




// Map 
//And map() might be preferable when changing or altering data. 
//Not only is it faster but it returns a new Array. 
//This means we can do cool things like chaining on
//  other methods ( map(), filter(), reduce(), etc.)

let arr4 = [1, 2, 3, 4, 5];
let newArr = arr4.map(num => num * 2).filter(num => num > 5);
// arr2 = [6, 8, 10]
console.log(newArr);







// // Example 3  -------- -------------------------------------->

//filter sample 1

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]





// filter sample 2

const todasFrutas = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (busqueda) => {
  return todasFrutas.filter((unaFruta) =>
    unaFruta.toLowerCase().indexOf(busqueda.toLowerCase()) > -1
  );
}
//  cambiar el  elemento dentro del parenteses ('ap') para cambiar resultado
console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
