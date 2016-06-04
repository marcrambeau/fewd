jQuery("#submit").click() {
	var comparison;
	var a = Number(jQuery("#a").val());
	var b = Number(jQuery("#b").val());

	if (a < b) {
		comparison = "<";
	} else if (a > b) {
		comparison = ">";
	} else if (a === b) {
		comparison = "=";
	}

	jQuery("#comparison").text(comparison);
};