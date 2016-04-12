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

// ############## for loops #####################
// Write a for loop that increments the counter variable by 10 each time, and displays the value.

// Write a for loop that divides the counter variable by 2 each time, and displays the value.

// Augment the loop to insert each new value into an array

// Write a loop that starts at 100 and decrements a variable by 1. If the number is even, add the number
//to the beginning of an array, else add it to the end of the array.

































