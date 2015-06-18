jQuery(document).ready(function($) {
	init();
});

var spreadsheetID = "1Nbn2-8niXdCwGj97raH4PHSv4MJqUhNMu4799G9Qy8s";

function init() {
	Tabletop.init( { key: spreadsheetID,
		callback: showInfo,
		simpleSheet: true } );
}

function showInfo(data, tabletop) {
	console.log(data);

	var numRes = data.length;
	var rand = Math.floor(Math.random() * numRes);
	str = data[rand].olanSays;
	str = str.replace(/(?:\r\n|\r|\n)/g, '<br />');

	$(data).each(function(){
    // Column names are name, age, etc.
		$('#olanSays').html(str);
  });
}
