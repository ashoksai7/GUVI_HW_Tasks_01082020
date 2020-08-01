var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}
//console.log(cat);
//Add height and weight to Fluffy
cat.height = 10;
cat.weight = 6;

//Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = 'Fluffyy'

//List all the activities of Fluffyy’s catFriends.
for(let i = 0; i < cat.catFriends.length; i++){
    for(let act in cat.catFriends[i].activities)
        console.log(cat.catFriends[i].activities[act]);
}

//Print the catFriends names.
for(let i = 0; i < cat.catFriends.length; i++){
    console.log(cat.catFriends[i].name);
}

//Print the total weight of catFriends
let totw = 0;
for(let i = 0; i < cat.catFriends.length; i++){
    totw = totw+cat.catFriends[i].weight;
}
console.log(totw);

//Print the total activities of all cats (op:6)
for(let act in cat.activities)
    console.log(cat.activities[act]);
for(let cf in cat.catFriends){
    for(let act in cat.catFriends[cf].activities)
        console.log(cat.catFriends[cf].activities[act]);
}



//Add 2 more activities to bar & foo cats
for(let cf in cat.catFriends){
    cat.catFriends[cf].activities.push('bite newbies');
    cat.catFriends[cf].activities.push('chase mice');
}

//Update the fur color of bar
cat.catFriends[0].furcolor = 'snow white';

console.log(cat);
console.log(cat.catFriends);