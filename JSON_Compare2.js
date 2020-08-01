var securityQuestions = [
 {
 question: "What was your first pet's name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"
 },
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"
 }
]

//Parsing JSON objects and Compare:
function chksecurityQuestions(securityQuestions,question, ans) {

 // your code here
 for(let i in securityQuestions){
     if(question === securityQuestions[i].question){
         if(ans === securityQuestions[i].expectedAnswer)
            return true;
         return false
     }
 }
 return false;
}
//Test case1:
var ques = "What was your first pet's name?";
var ans  =  "FlufferNutter";
var status1 = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status1); // true
//Test case2:
var ques = "What was your first pet's name?";
var ans  =  "DufferNutter";
var status1 = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status1); // flase