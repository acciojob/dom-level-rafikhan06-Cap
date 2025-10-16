//your JS code here. If required.
document.querySelector("#level");
let count = 0;
let previous = level.previousElementSibling;
while (previous) {
	count++;
	previous = previous.previousElementSibling;
}
alert("The level of the element is : "+count)