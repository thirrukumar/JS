/*var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello world!";

var myVariable;
myVariable = 'Bob';

var myVariable = 'Bob';

myVariable;

var myVariable = 'Bob';
myVariable = 'Joe';
/* Variables
// String ==> var myVariable = 'Bob';
// Number ==> var Variable = 10;
// Boolian ==> var myVariable = true;
// Array ==> var myVariable = [1, 'Bob','Joe',10]; each mem like myVariable[0], myVariable[1] etc..
// Object ==> var myVariable = document.querySelector('h1');
*/
/* Operators
Addition ==> 9 + 2; ==> "Hello" + "World"; add two numbers & glow two strings together
Subtraction ==> 99 - 22;
Multiplication ==> 8 * 3;
Divition ==> 3 / 4;
Assignment ==> = ===> var myVariable = 'Bob';
Equality ==> true/false (Boolean) Does a test to see if two values are equal or not and true or false
var myVariable = 3;
myVariable === 4;
Not, Does-not-equal ==> ! !== ===> 
var myVariable = 3;
!(myVariable === 3);

var myVariable =3;
myVariable !== 3;
*/

/* Conditionals ==> if else */
/*var iceCream =  'chocolate';
if (iceCream === 'chocolate') {
    alert ('I Love chocolate iceCream');
} else{
    alert ('Awww, but chocolate is my favourite..')
}
*/
/*
 var num1 = 3;
 var num2 = 4;

function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }
*/
/*
  document.querySelector('html').onclick = fuction() {
      alert('ouch! Stop poking me');
  }
  */
 var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Moxilla is cool, Welcome back  ' +storedName;
}

myButton.onclick = function() {
    setUserName();
}