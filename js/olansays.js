// OlanSays.js

function getSayings() {
	var spreadsheetID = "1Nbn2-8niXdCwGj97raH4PHSv4MJqUhNMu4799G9Qy8s";

	Tabletop.init({
		key: spreadsheetID,
		simpleSheet: true,
		callback: function(data){
			// Add values to localStorage for future reference, updating incrementally.
			var olanStorage = localStorage.getItem("olanSayings");
			olanStorage = JSON.parse(olanStorage);

			if (!olanStorage || data.length > olanStorage.length) {
				localStorage.setItem("olanSayings", JSON.stringify(data));
			}
		}
	});
}

function swapSaying(olanStorage) {

	if (!olanStorage || olanStorage === null) {
		olanStorage = localStorage.getItem("olanSayings");
		olanStorage = JSON.parse(olanStorage);
	}

	if (olanStorage === null) {
		// Replace saying.
		$('#olanSays').html("It's a Monday.");
	} else {
		var numRes = olanStorage.length;
		var rand = Math.floor(Math.random() * numRes);
		var str = olanStorage[rand].olanSays;

		// Replace new lines with breaks.
		str = str.replace(/(?:\r\n|\r|\n)/g, '<br />');

		// Replace saying.
		$('#olanSays').html(str);
	}
}

// Main runtime.
jQuery(document).ready(function($) {

	if(typeof(Storage)!=="undefined") {
		window.console.log("Yay, you have web storage! I think I left my watch in here somewhere...");
		
		var olanStorage = localStorage.getItem("olanSayings");
		olanStorage = JSON.parse(olanStorage);

		if (olanStorage && olanStorage.length > 0) {
			swapSaying(olanStorage);
			getSayings();
		} else {
			getSayings();
			swapSaying();
		}
	}
	
});