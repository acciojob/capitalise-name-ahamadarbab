//your JS code here. If required.
let input = document.getElementById("fname");

input.addEventListener("blur", function() {
	input.value = input.value.toUpperCase();
})