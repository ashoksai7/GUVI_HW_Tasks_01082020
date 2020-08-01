/*

TypeError: null is not an object (evaluating...) is an error that occurs in Safari when you read a
property or call a method on a null object. You can test this very easily in the Safari Developer Console.
 
*/

var nvar = null
if(nvar.length === 6)//TypeError: null is not an object (evaluating...)
	console.log("Array length is 6")