//Take the contents of the sonnet div and place it in a variable
var sonnet = document.getElementById ("sonnet");
 console.log ("sonnet", sonnet);

var mySonnet = sonnet.innerHTML;
console.log (" ", mySonnet);


//Find and output the starting position of the word "orphans"
var orphans = mySonnet.indexOf ("orphans");
console.log (orphans);


//Output the number of characters in the sonnet
//var str = document.getElementById ("stringlength");
console.log (mySonnet.length);

//Replace the first occurance of the string "winter" with "yuletide"
var newSonnet = mySonnet.replace ("winter", "yuletide");
console.log (" ", newSonnet);


//Replace all occurances of the string "the" with "a large"
var mySonnetUpdate = newSonnet.replace (/the /g, "a large ");
console.log (" ", mySonnetUpdate);


//Set the content of the sonnet div with the new string
sonnet.innerHTML = mySonnetUpdate;
console.log ("sonnetString from the DOM", sonnet.innerHTML);

//for loops

for (var i = seasons.length - 1; i >= 0; i--) {
	seasons[i]
}

for (var i = Things.length - 1; i >= 0; i--) {
	Things[i]
}

for (var i = 0; i < Things.length; i++) {
	Things[i]
}