// try this function
function myFunction() {
	var letter =
	document.getElementById("myInput").value;
	var text;
		if(letter === "Toxic")
			alert("Yas Queen Toxic!");
		else if(letter === "Oops")
				alert("Nop!");
				else if(letter === "Crazy")
				alert("Nop! Nop!");
				else if(letter === "Work B**ch")
				alert("Nop! Nop! Nop!");
				else if(letter === "Oh La La")
				alert("Nop! Nop! Nop! Nop!");
				else
				alert("Sorry honey!");

}

// try this function
function myFunction2() {
	var letter =
	document.getElementById("myInput2").value;
	var text;
		if(letter === "Oops")
			alert("Yas Queen Oops I did it!!");
		else if(letter === "Toxic")
				alert("Nop!");
				else if(letter === "Crazy")
				alert("Nop! Nop!");
				else if(letter === "Work B**ch")
				alert("Nop! Nop! Nop!");
				else if(letter === "Oh La La")
				alert("Nop! Nop! Nop! Nop!");
				else
				alert("Sorry honey!");

}

// try this function
function myFunction3() {
	var letter =
	document.getElementById("myInput3").value;
	var text;
		if(letter === "Work B**ch")
			alert("Yas Queen Work B**ch!");
		else if(letter === "Oops")
				alert("Nop!");
				else if(letter === "Crazy")
				alert("Nop! Nop!");
				else if(letter === "Toxic")
				alert("Nop! Nop! Nop!");
				else if(letter === "Oh La La")
				alert("Nop! Nop! Nop! Nop!");
				else
				alert("Sorry honey!");

}

// how many p elements
function pCount() {
    var nodelist = document.getElementsByTagName("P").length;
    document.getElementById("baby").innerHTML = nodelist;
}

// how many elements inside my first id
var fu = document.querySelectorAll("#fun").length;
alert(fu)


// additional click event 
var titleText = document.getElementById('funclick');
titleText.addEventListener('click',
	function(){
		alert("You clicked me baby! Ok, let's sing together.")
	})


