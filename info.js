// use the cheerio jquery and use request
const cheerio = require('cheerio');
const request = require('request');

// define method and url
request ({method: 'GET', url: 'https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cases-in-us.html'
	}, (err, res, html) => {

	// load html
	let $ = cheerio.load(html);

	// get the info
	let info = $('table.table-bordered.nein-scroll').text();

	// separate info by newline
	info = info.split('\n');

	// diplay it
	document.getElementById("start").innerHTML = info.slice(1, 2);
	document.getElementById("stat1").innerHTML = info.slice(4, 6);
	document.getElementById("stat2").innerHTML = info.slice(8, 10);
	document.getElementById("stat3").innerHTML = info.slice(12, 14);
	document.getElementById("stat4").innerHTML = info.slice(16, 18);

})
