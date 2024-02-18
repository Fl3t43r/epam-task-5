let str1 = 'ahb acb aeb aeeb adcb axeb';
let regex1 = /a.b/g;
let matches1 = str1.match(regex1);
console.log(matches1); 

let str2 = '2 + 3 223 2223';
let regex2 = /2 \+ 3/;
let match2 = str2.match(regex2);
console.log(match2);

let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

console.log("Day:", day);
console.log("Month:", month);
console.log("Year:", year);
