

var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

//Parsing a list of lists and convert into a JSON object:
function fromListToObject(arr) {
 var newObject = {};
 
 for(let i in arr){
     newObject[arr[i][0]] = arr[i][1];
 }
 
 return newObject;
}

let listToObj = fromListToObject(arr);
console.log(listToObj);