/*eslint-env browser*/

// The Product Inventory Management System

// create inventory array
var inventory = [];

// create 5 products & add them into inventory
var product1 = {
    sku: 222,
    product: 'Hat',
    quantity: 12,
    cost: 14.99
};
inventory.push(product1);

var product2 = {
    sku: 333,
    product: 'Socks',
    quantity: 36,
    cost: 9.99
};
inventory.push(product2);

var product3 = {
    sku: 555,
    product: 'Shirts',
    quantity: 10,
    cost: 15.99
};
inventory.push(product3);

var product4 = {
    sku: 111,
    product: 'Jeans',
    quantity: 22,
    cost: 39.99
};
inventory.push(product4);

var product5 = {
    sku: 444,
    product: 'Jackets',
    quantity: 5,
    cost: 49.99
};
inventory.push(product5);

window.console.log(inventory);



// extract sku numbers from inventory array
var sku = [];
inventory.forEach(function (item) {
    'use strict';
    sku.push(item.sku);
});
window.console.log(sku);



// display a command menu that features commands 
function displayMenu() {
    'use strict';
    window.console.log('Command Menu:');
    window.console.log('view - to view all products');
    window.console.log('update - to update stock');
    window.console.log('exit - to exit the program');
    window.console.log('');
}
//displayMenu();



// view command to display the details for each product in inventory, ordered by sku number
function view() {
    'use strict';
    // sort inventory by product's sku
    var sortedInv = inventory.sort(function (a, b) {
        return a.sku - b.sku;
    });

    window.document.write('<br>View a detailed inventory of all products:<br>');

    // display the details for each product
    sortedInv.forEach(function (item) {
        window.document.write(item.sku + ' ' + item.product + ' (' + item.quantity + ') $' + item.cost + '<br>');
    });
}
//view();



// update command allows the user to enter a new stock quantity if the user to enter a sku number correctly
function update() {
    'use strict';
    var skuNum = parseInt(window.prompt('Enter a sku number:'), 10),
        x = sku.indexOf(skuNum);

    // validate if the user enters a valid sku number 
    if (isNaN(x) || x === -1) { // if not
        window.alert('The sku number you entered is invalid. Try again!');
    } else { // if so, update a new stock quantity
        var newQuantity = parseInt(window.prompt('Enter a new stock quantity:'), 10);
        inventory[x].quantity = newQuantity;
        window.document.write('<br>You just updated the quantity of product with sku number of ' + skuNum + ' to: ' + inventory[x].quantity + '<br>');
    }
}
//update();
//view();



// exit command to terminate the program
function exit() {
    'use strict';
    window.alert('You just exited the program.\nThank you for trying and see you next time!');
    return;
}
//exit();



// let user to input a command from displayed menu
function menu() {
    'use strict';
    var commands = ['view', 'update', 'exit'],
        command = window.prompt('Enter a command:');

    // validate if the user enters a valid command
    if (commands.indexOf(command) === -1) {
        window.alert('The command you entered is invalid. Try again!');
    } else {
        switch (command) {
            case "view":
                view();
                break;
            case "update":
                update();
                break;
            case "exit":
                exit();
                break;
        }
    }
}
//menu();



function main() {
    'use strict';
    displayMenu();
    menu();
}
main();
