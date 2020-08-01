/*

"TypeError: ‘undefined’ is not an object (evaluating...)" is an error that occurs in Safari when you read a
property or call a method on an undefined object. You can test this very easily in the Safari Developer Console.
This is essentially the same as the "Uncaught TypeError: Cannot read property" for Chrome, but Safari uses a different error message.

 */

var unvar = undefined;
if(unvar.length === 5)//TypeError: ‘undefined’ is not an object (evaluating...)
	console.log("Length of the array is 5")