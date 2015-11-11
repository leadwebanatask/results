function saveDatalayer() {
	window.datalayer = window.datalayer ? window.datalayer : {};
	window.datalayer.params = window.datalayer.params ? window.datalayer.params : {};

	if ( typeof Storage !== "undefined") {
		try {
			localStorage.setItem("datalayer", JSON.stringify(window.datalayer));
		} catch (e) {
			console.log('unable to save data in browser Storage', e);
			//some browsers don't allow to save data in Storage in private mode. e.g. Mobile Safari.
			// also above code will fail if datalayer has recuring properties like:
			// var x = {};
			// x.y =x ;
		}
	} else {
		console.log('no storage support');
	}

}

function loadDataLayer() {
	if ( typeof Storage !== "undefined") {
		try {
			var retrievedData = localStorage.getItem("datalayer");
			if (retrievedData !== null) {
				window.datalayer = JSON.parse(retrievedData);
			}
		} catch (e) {
			console.log('unable to retrieve data from storage', e);
		}
	} else {
		console.log('no storage support');
	}

}


