function calculate(type, results) {
	if(type === 'action') {
		if(results === 'c') {
			document.getElementById('input_results').value = '';
		}

		if(results === '*' || results === '/' || results === '+' || results === '-' || results === '.') {
			document.getElementById('input_results').value += results;
		} 

		if(results === '=') {
			var field_results = eval(document.getElementById('input_results').value);
			document.getElementById('input_results').value = field_results;
		}
	}

	if(type === 'num') {
		document.getElementById('input_results').value += results;
	}
}