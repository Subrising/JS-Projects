var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

for (var i = 0; i < deleteBtns.length; i++) {
	deleteBtns[i].addEventListener("click", removeParent, false);
}

function removeParent(e) {
	e.target.removeEventListener("click", removeParent, false);
	e.target.parentNode.remove();
}

function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}

function strikeThrough(event) {
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var newBtn = document.createElement("button");
	newBtn.innerHTML = "Delete";
	newBtn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(newBtn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
ul.addEventListener("click", strikeThrough);
input.addEventListener("keypress", addListAfterKeypress);
