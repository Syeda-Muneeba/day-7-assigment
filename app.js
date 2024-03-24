"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
var app_1 = require("../day5/app");
console.log("n PRINTING NUMBER OF GUEST INVITED");
console.log("we had finally invited ".concat(app_1.guest_list.length, "from day5"));
//Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these item
var language = ['english', 'urdu', 'hindi', 'french', 'arabic'];
console.log("list of countries:");
for (var _i = 0, language_1 = language; _i < language_1.length; _i++) {
    var top_1 = language_1[_i];
    console.log(top_1);
}
//create two objects
var book = {
    name: 'ESSIENTIAL TYPESCRIPT',
    price: 450
};
var apple = {
    name: 'apple',
    price: 200
};
console.log("book name: ".concat(book.name, ", price : $").concat(book.price));
console.log("apple name: ".concat(apple.name, ", price : $").concat(apple.price));
