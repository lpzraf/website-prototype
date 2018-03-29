
// 1. Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.
var totalCookies = 30
var totalBeers = 40
var cookieCategory = "Vanilla Wafer"
var beerCategory = "Lager"


console.log(totalCookies + totalBeers + totalCookies)


// 2. Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

var surfspotArray = ["Pipeline","Trestles","Puerto Escondido","Gas Chambers"];
var surfspotArray2 = ["Snapper Rocks","Chatarra","Uluwatu","Kirra"];
console.log(surfspotArray[2], surfspotArray2[1])

// 3. Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.
var itemQuantity = 30
if (itemQuantity > 100) {
		alert("Yay, item quantity is less than 100!");
} else {
 	alert("Ehhhhh sorry but no, quantity is actually bigger than 100.");
 }

// 4. Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.

function alertName(somePerson){
		return alert(somePerson);
	}

	alertName("La Rafa");







	






