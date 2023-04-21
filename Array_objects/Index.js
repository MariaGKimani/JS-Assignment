// let grocery = ["Onions","Tomatoes","Oranges","bananas","Mangoes","potatoes"]
// let groceryQuantitys = {
//     "Onions": 24,
//     "Tomatoes": 30,
//     "Oranges": 50,
//     "bananas": 70,
//     "Mangoes": 100,
//     "Potatoes":60,
// }
// Create an array containing the names of all items in the inventory.
let groceryItems = [];
// Create a separate array with the corresponding stock quantities of each item.
let groceryQuantities = [];
// Write a function to add a new item to the inventory, updating both arrays.
const add = (item, quantity) =>{
    groceryItems.push(item);
    groceryQuantities.push(quantity);
}
add('Tomatoes', 24);
add('Potatoes', 52);
add('Pineapples', 124);
add('Garlic', 10);
console.log(groceryItems);
console.log(groceryQuantities);
// Write a function to update the stock quantity of an existing item.
const update = (item, newQ) => {
    let position = groceryItems.indexOf(item);
    if (position>=0) {
        groceryQuantities[position]=newQ;
    }
}
update('Tomatoes', 50);
console.log(groceryQuantities);
// Write a function to calculate the total number of items in the inventory.
const totalNumber = () =>{
    let allItems=0;
    for (let i = 0; i < groceryQuantities.length; i++) {
       allItems+=groceryQuantities[i];
    }
    return allItems;
}
console.log(totalNumber());
// Write a function to find the item with the lowest stock quantity.
const lowestQuantity = () =>{
    let lowestQuantIndex = 0;
    for (let x = 0; x < groceryQuantities.length; x++) {
        if (groceryQuantities[x]< groceryQuantities[lowestQuantIndex]) {
            lowestQuantIndex=x;
        }
    }
    return groceryItems[lowestQuantIndex]
}
console.log(lowestQuantity());









