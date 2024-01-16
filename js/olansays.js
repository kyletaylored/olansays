// OlanSays.js

function getSayings() {
    var spreadsheetID = "1Nbn2-8niXdCwGj97raH4PHSv4MJqUhNMu4799G9Qy8s";
    // var spreadsheetURL = "https://docs.google.com/spreadsheets/d/e/" + spreadsheetID + "/pub?output=csv";
	var spreadsheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT94iG8pDGg7i03J7r0Khr7T8gnuYQoGzDcQouTA04i6HsrXythBWoaafLTC5QMIGgxffPTCB-dUJJT/pub?gid=1207752035&single=true&output=csv";

    Papa.parse(spreadsheetURL, {
        download: true,
        header: true,
        complete: function(results) {
            var data = results.data;
            // Add values to localStorage for future reference, updating incrementally.
            var olanStorage = localStorage.getItem("olanSayings");
            olanStorage = JSON.parse(olanStorage) || [];

            if (data.length > olanStorage.length) {
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
		var olanObj = olanStorage[rand];
		var str = olanObj["What does Olan say?"];

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