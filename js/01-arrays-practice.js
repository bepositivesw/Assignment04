/*eslint-env browser*/

//STEP 1
//var favMovies = ['The Godfather', 'The Silence of the Lambs', 'Gone with the Wind', 'The Sound of Music', 'Casablanca'];
//window.console.log(favMovies[1]);


//STEP 2
//var movies = new Array(5);
//movies[0] = 'The Godfather';
//movies[1] = 'The Silence of the Lambs';
//movies[2] = 'Gone with the Wind';
//movies[3] = 'The Sound of Music';
//movies[4] = 'Casablanca';
//window.console.log(movies[0]);


//STEP 3
//var movies = new Array(5);
//movies[0] = 'The Godfather';
//movies[1] = 'The Silence of the Lambs';
//movies[2] = 'Gone with the Wind';
//movies[3] = 'The Sound of Music';
//movies[4] = 'Casablanca';
//movies[5] = 'Titanic';
//window.console.log(movies.length);


//STEP 4
//var movies = [];
//var i;
//for (i = 0; i < 5; i += 1) {
//    movies.push(favMovies[i]);
//}
//delete movies[0];
//window.console.log(movies);


//STEP 5
/*
var movies = [];
var i;

function addMovies() {
    'use strict';
    movies.push('Braveheart');
    movies.push('Dances with Wolves');
    for (i = 0; i < favMovies.length; i += 1) {
        movies.push(favMovies[i]);
    }    
}
addMovies();

for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
*/


//STEP 6
//var movies = [];
//var i;
//
//function addMovies() {
//    'use strict';
//    movies.push('Braveheart');
//    movies.push('Dances with Wolves');
//    for (i = 0; i < favMovies.length; i += 1) {
//        movies.push(favMovies[i]);
//    }
//}
//addMovies();
//
//
//Array.prototype.myname = function () {
//    'use strict';
//};
//
//for (i in movies) {
//    if (movies.hasOwnProperty(i)) {
//        window.console.log(movies[i]);
//    }
//}


//STEP 7
//var movies = [];
//var i;
//
//function addMovies() {
//    'use strict';
//    movies.push('Braveheart');
//    movies.push('Dances with Wolves');
//    for (i = 0; i < favMovies.length; i += 1) {
//        movies.push(favMovies[i]);
//    }
//    movies.sort(); // sorting movies
//}
//addMovies();
//
//
//Array.prototype.myname = function () {
//    'use strict';
//};
//
//for (i in movies) {
//    if (movies.hasOwnProperty(i)) {
//        window.console.log(movies[i]);
//    }
//}


//STEP 8
//var movies = [];
//var i;
//
//function addMovies() {
//    'use strict';
//    movies.push('Braveheart');
//    movies.push('Dances with Wolves');
//    for (i = 0; i < favMovies.length; i += 1) {
//        movies.push(favMovies[i]);
//    }
//}
//addMovies();
//
//// display the movies array
//window.console.log('Movies I like:\n\n');
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log('Movie ' + (i + 1) + ': ' + movies[i]);
//}
//
//
//var leastFavMovies = [];
//leastFavMovies[0] = 'Jaws';
//leastFavMovies[1] = 'Titanic';
//leastFavMovies[2] = 'Unforgiven';
//
//// display the leastFavMovies array
//window.console.log('\n\nMovies I regret watching:\n\n');
//for (i = 0; i < leastFavMovies.length; i += 1) {
//    window.console.log('Movie ' + (i + 1) + ': ' + leastFavMovies[i]);
//}



//STEP 9
//var movies = [];
//var i;
//
//function addMovies() {
//    'use strict';
//    movies.push('Braveheart');
//    movies.push('Dances with Wolves');
//    for (i = 0; i < favMovies.length; i += 1) {
//        movies.push(favMovies[i]);
//    }
//}
//addMovies();
//
//// display the movies array
//window.console.log('Movies I like:\n\n');
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log('Movie ' + (i + 1) + ': ' + movies[i]);
//}
//
//var leastFavMovies = [];
//leastFavMovies[0] = 'Jaws';
//leastFavMovies[1] = 'Titanic';
//leastFavMovies[2] = 'Unforgiven';
//
//// display the leastFavMovies array
//window.console.log('\n\nMovies I regret watching:\n\n');
//for (i = 0; i < leastFavMovies.length; i += 1) {
//    window.console.log('Movie ' + (i + 1) + ': ' + leastFavMovies[i]);
//}
//
////merge the two arrays together into a single array
//movies = movies.concat(leastFavMovies);
//
//// display the list in reverse sorted order
//window.console.log(movies.sort().reverse());



//STEP 10
//var movies = [];
//var i;
//
//function addMovies() {
//    'use strict';
//    movies.push('Braveheart');
//    movies.push('Dances with Wolves');
//    for (i = 0; i < favMovies.length; i += 1) {
//        movies.push(favMovies[i]);
//    }
//}
//addMovies();
//
//// display the movies array
//window.console.log('Movies I like:\n\n');
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log('Movie ' + (i + 1) + ': ' + movies[i]);
//}
//
//var leastFavMovies = [];
//leastFavMovies[0] = 'Jaws';
//leastFavMovies[1] = 'Titanic';
//leastFavMovies[2] = 'Unforgiven';
//
//// display the leastFavMovies array
//window.console.log('\n\nMovies I regret watching:\n\n');
//for (i = 0; i < leastFavMovies.length; i += 1) {
//    window.console.log('Movie ' + (i + 1) + ': ' + leastFavMovies[i]);
//}
//
////merge the two arrays together into a single array
//movies = movies.concat(leastFavMovies);
//
//// display the list in reverse sorted order
//window.console.log(movies.sort().reverse());
//
//// display the last item
//window.console.log(movies[movies.length - 1]);



//STEP 11
//var movies = [];
//var i;
//
//function addMovies() {
//    'use strict';
//    movies.push('Braveheart');
//    movies.push('Dances with Wolves');
//    for (i = 0; i < favMovies.length; i += 1) {
//        movies.push(favMovies[i]);
//    }
//}
//addMovies();
//
//// display the movies array
//window.console.log('Movies I like:\n\n');
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log('Movie ' + (i + 1) + ': ' + movies[i]);
//}
//
//var leastFavMovies = [];
//leastFavMovies[0] = 'Jaws';
//leastFavMovies[1] = 'Titanic';
//leastFavMovies[2] = 'Unforgiven';
//
//// display the leastFavMovies array
//window.console.log('\n\nMovies I regret watching:\n\n');
//for (i = 0; i < leastFavMovies.length; i += 1) {
//    window.console.log('Movie ' + (i + 1) + ': ' + leastFavMovies[i]);
//}
//
////merge the two arrays together into a single array
//movies = movies.concat(leastFavMovies);
//
//// display the list in reverse sorted order
//window.console.log(movies.sort().reverse());
//
//// display the last item
//window.console.log(movies[movies.length - 1]);
//// or
//window.console.log(movies.slice(-1));
//
//
//// display the first item 
//window.console.log(movies.slice(0, 1));
//window.console.log(movies);


//STEP 12
//var newMovies = ['Gladiator', 'Patton', 'Rain Man'];
//
//// retrieve the disliked-movies in your array and return their indices
//// using those indices, add movies that you do like from newMovies
//var index = [];
//for (i = 0; i < leastFavMovies.length; i += 1) {
//    index.push(movies.indexOf(leastFavMovies[i].toString()));
//    movies.splice(index[i], 1, newMovies[i]);
//}
//
//// display results
//window.console.log(newMovies);
//window.console.log(leastFavMovies);
//window.console.log(index);
//window.console.log(movies);


//STEP 13
// 007 & Harry Potter movies are truly my favorite! Start having fun ~
//var employee1 = [];
//employee1.employeeId = '007';
//employee1.name = 'James Bond';
//employee1.title = 'secret agent';
//employee1.department = 'MI6';
//employee1.isCurrentEmployed = 'true';
//window.console.log(employee1);
//
//var employee2 = [];
//employee2.employeeId = '111';
//employee2.name = 'Harry Potter';
//employee2.title = 'wizard';
//employee2.department = 'Wizarding World';
//employee2.isCurrentEmployed = 'true';
//window.console.log(employee2);
//
//// add both of those associative arrays to a new array 
//var employees = [employee1, employee2];
//window.console.log(employees);
//
//// display the name of the second employee 
//window.console.log(employees[1].name);



//STEP 14
//var employee1 = [];
//employee1.employeeId = '007';
//employee1.name = 'James Bond';
//employee1.title = 'secret agent';
//employee1.department = 'MI6';
//employee1.isCurrentEmployed = 'true';
//window.console.log(employee1);
//
//var employee2 = [];
//employee2.employeeId = '111';
//employee2.name = 'Harry Potter';
//employee2.title = 'wizard';
//employee2.department = 'Wizarding World';
//employee2.isCurrentEmployed = 'true';
//window.console.log(employee2);
//
//// add both of those associative arrays to a new array 
//var employees = [employee1, employee2];
//window.console.log(employees);
//
//// display the name of the second employee 
//window.console.log(employees[1].name);
//
//
//// display the names of both employees
//var k;
//for (k = 0; k < employees.length; k += 1) {
//    window.console.log(employees[k].name);
//}



//STEP 15
// create two associative arrays 
//var employee1 = [];
//employee1.employeeId = '007';
//employee1.name = 'James Bond';
//employee1.title = 'secret agent';
//employee1.department = 'MI6';
//employee1.isCurrentEmployed = 'true';
//window.console.log(employee1);
//
//var employee2 = [];
//employee2.employeeId = '111';
//employee2.name = 'Harry Potter';
//employee2.title = 'wizard';
//employee2.department = 'Wizarding World';
//employee2.isCurrentEmployed = 'true';
//window.console.log(employee2);
//
//// add both of those associative arrays to a new array 
//var employees = [employee1, employee2];
//window.console.log(employees);
//
//// display the name of the second employee 
//window.console.log(employees[1].name);
//
//
//// display the names of both employees
//var k;
//for (k = 0; k < employees.length; k += 1) {
//    window.console.log(employees[k].name);
//}
//
//
//
//var employee3 = [];
//employee3.employeeId = '777';
//employee3.name = 'Sophia Wang';
//employee3.title = 'web developer';
//employee3.department = 'Marketing';
//employee3.isCurrentEmployed = 'false';
//
//employees = [employee1, employee2, employee3];
////window.console.log(employees);
//
//// display employees who are currently employed
//for (k = 0; k < employees.length; k += 1) {
//    if (employees[k].isCurrentEmployed === 'true') {
//        window.console.log(employees[k]);
//    }
//}



//STEP 16
// create a multi-dimensional array 
//var movies = [['The Godfather', 1], ['The Silence of the Lambs', 2], ['Gone with the Wind', 3], ['The Sound of Music', 4], ['Casablanca', 5]];
//window.console.log(movies);
//
//
//// loop through the array and filter out and display only the movie names
//var movieNames = [];
//movies.forEach(function (movies) {
//    'use strict';
//    var s = movies.filter(function (item) {
//        return typeof item === 'string';
//    });
//    movieNames.push(s);
//});
//window.console.log(movieNames);




//STEP 17
//var employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];
//window.console.log('Employees:\n\n');
//
//// create an anonymous function called showEmployee
//var showEmployee = function (arr) {
//    'use strict';
//    arr.forEach(function (arr) {
//        window.console.log(arr);
//    });
//};
//showEmployee(employees);



//STEP 18
// Write a function to filter false, null, 0 and blank values from an array

Array.prototype.myname = function () {
    "use strict";
};

function filterValues(arr) {
    'use strict';
    var filterOut = [false, null, 0, ''],
        result = arr.filter(function (item) {
            var x;
            for (x in filterOut) {
                if (filterOut.hasOwnProperty(x) && item !== filterOut[x]) {
                    return item;
                }
            }
        });
    window.console.log(result);
}

var test = [58, '', 'abcd', true, null, false, 0];
filterValues(test);



//STEP 19
// Write a function to get a random item from an array

function randomItem(arr) {
    'use strict';
    var randomIndex = Math.round(Math.random() * (arr.length - 1));
    window.console.log(arr[randomIndex]);
}

var nums = [8, 5, 7, 2, 9, 11, 3];
var names = ["Zak", "Joy", "Sophia", "Bob", "James", "Peter"];
randomItem(nums);
randomItem(names);



//STEP 20
// Write a function to get the largest number from a numeric array

function getMaxNum(arr) {
    'use strict';
    var maxNum;
    maxNum = Math.max.apply(null, arr);
    window.console.log(maxNum);
}

getMaxNum(nums);
