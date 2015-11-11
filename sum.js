function sum() {
	var result = 0;
	for (var arg in arguments) {
		if (arguments.hasOwnProperty(arg) && !isNaN(arguments[arg])) {
			result = parseFloat((result + parseFloat(arguments[arg])).toFixed(5));
		}
	}
	return result;
}