var obj = {name : "RajiniKanth", age : 33, hasPets : false};


function printAllValues(obj) {
 // your code here
 let a = [];
 for(let i in obj)
    a.push(obj[i]);
 return a;
}

function printAllKeys(obj) {
 // your code here
 let a = [];
 for(let i in obj)
    a.push(i);
 return a;
}

function convertListToObject(obj) {
 // your code here
 let a=[];
 let a1=[];
 for(let i in obj){
     a1.push(i);
     a1.push(obj[i]);
     a.push(a1);
     a1=[];
 }
 return a;
}

var allval = printAllValues(obj);
var allkey = printAllKeys(obj);
var loob = convertListToObject(obj);
console.log(allval);
console.log(allkey);
console.log(loob);