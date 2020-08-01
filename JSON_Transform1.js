var arr = ["GUVI", "I", "am", "a geek"];

//Parsing a list and transform the first and last elements of it:
function transformFirstAndLast(arr) {
 let newObject = {}
 newObject[arr[0]] = arr[arr.length-1];
 return newObject;
}

let transObject = transformFirstAndLast(arr);
console.log(transObject);