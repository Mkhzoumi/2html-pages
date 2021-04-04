'use strict';


let userName = prompt('what\'s your name?');
let birthYear = prompt('what is your birth year?','1990');
let userUse = prompt('what is your main use for the laptop?','gaming , business ,....');
let budget = prompt('how much is your budget?');
let year = 2021 - parseInt(birthYear);

alert('your name is ' + userName + ', you are '+ year + 'years old' + ', you will be using your laptop for ' + userUse + ', and your budget is about ' + budget + ' jd.');

console.log('his name is '+userName);
console.log('his birth year is '+birthYear);
console.log('he will use his laptop for '+userUse);
console.log('his budget is about '+budget);