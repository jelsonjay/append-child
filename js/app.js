'use strict'
// Parent Element
let list = document.querySelector('.list')
let carsList = [
    'Lamborghini', 
    'Bentley', 
    'Ferrari', 
    'BMW', 
    'Merceds Benz',
    'Porsche',
    'Aston Martin',
    'Maserati',
    'Bugatti',
    'Jaguar',
    'Lexus'
];

// Create new items
for (let cars of carsList) {
    let newCarsItem = document.createElement('li')
    newCarsItem.textContent = cars;
    list.appendChild(newCarsItem)
}

// show 
list.appendChild(myList);


