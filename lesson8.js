
alert("Hi"); 
var subjects = ["maths", "english", "geography"];


var subjects = [
    "maths",
    "english",
    "geography",

];

subjects[2];
//..................
var colors = ['white',
'black',
'custom'];

colors[1] = 'blue';
console.log(colors);

//.....................


var months = ['march', 'april', 'may'];
console.log(months.length);

var newLength = months.push('September');
console.log(newLength);
console.log(months);

var last = months.pop(); //hanum a verjiny
console.log(months);

var first = months.shift();
console.log(months);
var newLength2 = months.unshift('March'); //het a berum
console.log(months);

var position = months.indexOf('March');
console.log(position);


//--------------------


var fruits = ["apple", "orange", "raspberry pi"];
var stationary = ["pen", "book", "ruler"];
var array = [0, 1,"spam", false];

var listOfLists = [fruits, stationary, array];
console.log(listOfLists);

//........................

 var fruits =["banana", "peach", "mango"];
 var last =fruits[fruits.length - 1];
 console.log(fruits);

//--------------

fruits = ["banana", "orange", "apple", "mango"];
fLen = fruits.length;
for (i=0; i < fLen; i++){
    console.log(fruits[i]);
}
//------------------

var names = ["Suzy", "Billy", "Tommy", "Nick", "Ben"];

for (i=0; i < names.length; i++) {
console.log (" I know someone called " + names[i] );
} 
