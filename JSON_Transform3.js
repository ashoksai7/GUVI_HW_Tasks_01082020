var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

//Parsing a list of lists and convert into a JSON object:
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 
 //Your code
 for(let i in arr){
     let no = {};
     for(let j in arr[i]){
         no[arr[i][j][0]] = arr[i][j][1];
     }
     tranformEmployeeList.push(no);
 }
 
 return tranformEmployeeList;
}

let tranformEmployeeList = transformEmployeeData(arr);
console.log(tranformEmployeeList);