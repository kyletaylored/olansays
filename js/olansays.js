jQuery(document).ready(function($) {
	init();
});

function init() {

	var spreadsheetID = "1Nbn2-8niXdCwGj97raH4PHSv4MJqUhNMu4799G9Qy8s";
	var sayings = "sayings";

	// Add values to localStorage for future reference, updating incrementally.
	if(typeof(Storage)!=="undefined") {
		console.log("Yay, you have web storage! I think I left my watch in here somewhere...");
		if (!localStorage.sayings || sayings.length > localStorage.sayings.length) {
			localStorage.sayings = sayings;
		}
	} else {
		console.log("Sorry, no web storage for you. :(");
	}

	Tabletop.init({
		key: spreadsheetID,
		callback: showInfo,
		simpleSheet: true
	});

}

function showInfo(data, tabletop) {
	console.log(data);

	var numRes = data.length;
	var rand = Math.floor(Math.random() * numRes);
	str = data[rand].olanSays;
	// Replace new lines with breaks.
	str = str.replace(/(?:\r\n|\r|\n)/g, '<br />');

	$(data).each(function(){
    // Column names are name, age, etc.
		$('#olanSays').animate().html(str);
  });
}
