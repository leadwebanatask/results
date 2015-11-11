//<img src="https://example.com/datacollector?pia.ca=72208039&pie.de=cbartens@datalicious.com&pin.gn=Christian&pin.fn=Bartens">

function populateImageTag(url) {

	//map function is not working in older IEs.
	function encodeData(data) {
		return Object.keys(data).map(function(key) {
			return [key, data[key]].map(encodeURIComponent).join("=");
		}).join("&");
	}

	function urlFix(url) {
		if (url.substring(url.length - 1, url.length) === "?" || url.substring(url.length - 1, url.length) === "&") {
			return url;
		}

		if (url.substring(url.length - 1, url.length) !== "?" && url.substring(url.length - 1, url.length) !== "&" && url.indexOf("?") > -1) {
			return url + "&";
		}

		if (url.substring(url.length - 1, url.length) !== "?" && url.substring(url.length - 1, url.length) !== "&" && url.indexOf("?") === -1) {
			return url + "?";
		}

	}

	function generateUrl(url) {
		window.datalayer = window.datalayer ? window.datalayer : {};
		window.datalayer.params = window.datalayer.params ? window.datalayer.params : {};
		return urlFix(url) + encodeData(window.datalayer.params);
	}

	var img = document.createElement('img');
	var src = document.createAttribute("src");
	src.value = generateUrl(url);
	img.setAttributeNode(src);
	document.body.appendChild(img);
}
