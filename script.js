// Flat array
const movies = [
  'Inception',
  'The Matrix',
  'Interstellar',
  'The Dark Knight',
  'Pulp Fiction',
];

console.log(movies);
console.log(movies[2]);

//
//

// Object with arrays
const groceries = {
  fruits: ['apples', 'bananas', 'oranges'],
  vegetables: ['carrots', 'broccoli', 'spinach'],
  dairy: ['milk', 'cheese', 'yogurt'],
};

console.log(groceries);
console.log(groceries.fruits[0]);
console.log(groceries.vegetables[2]);
console.log(groceries.dairy[1]);

//
//

// Array with objects
const onlineStore = [
  {
    name: 'Laptop',
    price: 1200,
    inStock: true,
  },
  {
    name: 'Phone',
    price: 800,
    inStock: false,
  },
  {
    name: 'Headphones',
    price: 150,
    inStock: true,
  },
];

console.log(onlineStore);
console.log(onlineStore[0].name);
console.log(onlineStore[2].price);
console.log(onlineStore[0].inStock);

//
//
//

const handlesliste = [];

const pushButton = document.querySelector('#pushButton');

pushButton.addEventListener('click', function () {
  console.log('Knapp er trykket!');
});
