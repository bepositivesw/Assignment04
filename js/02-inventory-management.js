/*eslint-env browser*/

// The Product Inventory Management System
var inventory = [];
var skuNums = [];
var storage;
var invList = '';
var invStorage = [];




// extract skuNums numbers from inventory array
function getSku(inventory) {
    'use strict';
    inventory.forEach(function (inventory) {
        skuNums.push(inventory[0]);
    });
    window.console.log('The sku number for each product:');
    window.console.log(skuNums);
    window.console.log('');
    return skuNums;
}
//getSku(inventory);




// display a command menu that features commands 
function displayMenu() {
    'use strict';
    window.console.log('Welcome to the Product Inventory Management System!');
    window.console.log('');
    window.console.log('Command Menu:');
    window.console.log('view - to view all products');
    window.console.log('update - to update stock');
    window.console.log('exit - to exit the program');
    window.console.log('');
}
//displayMenu();



// view command to display the details for each product in inventory, ordered by skuNums number
function view(inventory) {
    'use strict';
    // sort a copy of inventory by skuNums#
    var invCopy = inventory.slice().sort();
    window.console.log('View a detailed inventory of all products:');
    // display the details for each product
    invCopy.forEach(function (invCopy) {
        window.console.log(invCopy[0] + ' ' + invCopy[1] + ' (' + invCopy[2] + ') $' + invCopy[3]);
    });
    window.console.log('');
}
//view(inventory);



// update command allows the user to enter a new stock quantity only if the user entered a sku number correctly
function update(inventory) {
    'use strict';
    var sku, x, newQuantity;
    sku = parseInt(window.prompt('Enter a sku number:'), 10);
    x = skuNums.indexOf(sku);

    // validate if the user enters a valid sku# 
    if (x > -1) { // if sku# valid, update a new stock quantity
        newQuantity = parseInt(window.prompt('Enter a new stock quantity:'), 10);
        inventory[x][2] = newQuantity;

        window.console.log('You just updated the quantity of product with sku number of ' + sku + ' to: ' + inventory[x][2]);
        window.console.log('');

        //toStorage(inventory);

    } else { // if sku# invalid
        window.alert('Invalid sku number!');
    }
}
//update(inventory);





// save inventory to localStorage
// convert data type from array to string
function toStorage() {
    'use strict';
    var i;
    invList = inventory.slice();
    for (i = 0; i < invList.length; i += 1) {
        invList[i] = invList[i].join('|');
    }
    invList = invList.join('\n');

    localStorage.setItem("invList", invList);
    storage = localStorage.getItem("invList");
    return storage;
}
//toStorage();



// retrieve inventory from lacalStorage
// convert data type from string to array
function fromStorage() {
    'use strict';
    var i, j;
    invStorage = storage.split(',\n').map(function (e) {
        return e.split('|');
    });

    for (i = 0; i < 5; i += 1) {
        for (j = 0; j < 4; j += 1) {
            if (isNaN(parseFloat(invStorage[i][j]))) {
                invStorage[i][j] = invStorage[i][j];
            } else {
                invStorage[i][j] = Number(invStorage[i][j]);
            }
        }
    }
    return invStorage;
}
//fromStorage();






function main() {
    'use strict';
    var command;
    inventory = [[222, 'Hat', 12, 14.99],
                 [333, 'Socks', 36, 9.99],
                 [555, 'Shirt', 10, 15.99],
                 [111, 'Jeans', 22, 39.99],
                 [444, 'Jackets', 5, 49.99]];

    displayMenu();
    getSku(inventory);

    while (true) {
        command = window.prompt('Enter a command:');
        toStorage();

        if (command !== null) {
            if (command === 'view') {
                view(inventory);
            } else if (command === 'update') {
                update(inventory);
                toStorage();
            } else if (command === 'exit') {
                break;
            } else {
                window.alert('Invalid command!');
            }
        } else {
            break;
        }
    }
    window.console.log('Program ended!');
    fromStorage();
}

main();


// Not sure how to use localStorage!
