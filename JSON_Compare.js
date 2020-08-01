var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};

//Parsing two JSON objects and Compare:
function assertObjectsEqual(actual, expected, testName){
 // your code here
 for(let i in actual){
     if(actual[i] !== expected[i])
        return "FAILED [my test] Expected " + JSON.stringify(expected) + ", but got " + JSON.stringify(actual);
 }
 
 for(let i in expected){
     if(actual[i] !== expected[i])
        return "FAILED [my test] Expected " + JSON.stringify(expected) + ", but got " + JSON.stringify(actual);
 }
 return "Passed";
}

console.log(assertObjectsEqual(actual, expected, 'detects that two objects are equal'))

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6 , car: 7};
console.log(assertObjectsEqual(actual, expected, 'detects that two objects are equal'))

var expected = {foo: 5, bar: 6};
var actual = {foo: 6, bar: 5};
console.log(assertObjectsEqual(actual, expected, 'detects that two objects are equal'))