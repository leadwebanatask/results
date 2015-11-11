//given url http://www.datalicious.com/?pia.ca=72208039&pie.de=cbartens@datalicious.com&pin.gn=Christian&pin.fn=Bartens&pip.de=&oi.na=&ps.na=&pl.ci=&pl.re=&pl.co=&utm_source=purl&utm_medium=purl&utm_campaign=purl

function extractParams(url) {
	if (typeof url ==="undefined") {
		url = window.location.href;
	}

function getParams(url) {
    var params = {};
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      params[key] = value;
    });
    return params;
  }
  
function setParams2DL(params) {
	window.datalayer = window.datalayer? window.datalayer :  {};
	window.datalayer.params = params;
}

setParams2DL(getParams(url));

}
