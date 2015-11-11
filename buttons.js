for (var i = 0; i < 5; i++) {
	(function(num) {
		var btn = document.createElement('button');
		btn.appendChild(document.createTextNode('Button ' + num));
		btn.addEventListener('click', function() {
			console.log(num);
		});
		document.body.appendChild(btn);
	})(i);
}
