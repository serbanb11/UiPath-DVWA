function (element, input) {
	var option = document.createElement("option");
	option.text = input;
    element.add(option, element[0]);
	element.value = input;
}