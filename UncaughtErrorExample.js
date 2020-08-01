/*Uncaught TypeError: Cannot read property is a very common error when working with object and array to get a TypeError: Cannot read property 'name' of undefined.
 This happens when we try to access a property of a value that is undefined or null in JavaScript.*/

var movie = {
  name: "Interstellar",
  director: {
    name: "Christopher Nolan",
    born: "July 30, 1970"
  },
  music: "Hans Zimmer"
};
console.log(movie.director.name); //Christopher Nolan
console.log(movie.music.name); //undefined
console.log(movie.cast); //undefined
if(movie.cast){
console.log(movie.cast[0].name); //Uncaught TypeError: Cannot read property '0' of undefined
}//Uncaught TypeError: Cannot read property '0' of undefined


var obj = {};

if(obj.prop1)
	console.log(obj.prop1.deepProp); //Uncaught TypeError: Cannot read property 'deepProp' of undefined