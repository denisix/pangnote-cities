function getCountries() {
	return require('./countries.json')
}

function getCountryNames() {
	return require('./countries.json').map(c => c.name.common)
}

function getCountryNamesKeys() {
	let hash = {};
	require('./countries.json').map(c => hash[c.name.common]=null)
	return hash;
}
	
function getCities(country) {
	if (!country || country == '') return 'unknown country!';
	const s = country.split(" ");
	country = null;
	s.forEach(split => {
			split = split.charAt(0).toUpperCase() + split.slice(1);
			country = ((country) ? (country + ' ' + split) : split);
	});
	
	var data = require('./cities.json') // data : [country : [cities]]
	return data["countries"][country];
}

function getCitiesKeys(country) {
	if (!country || country == '') return 'unknown country!';
	const s = country.split(" ");
	country = null;
	s.forEach(split => {
			split = split.charAt(0).toUpperCase() + split.slice(1);
			country = ((country) ? (country + ' ' + split) : split);
	});
	
	let cc = {};
	require('./cities.json')["countries"][country].forEach(i => cc[i]=null);
	return cc;
}

function getCityGeo(city) {
	return require('./geo.json')[city];
}

function getCountryISO(country) {
	if (!country || country == '') return 'unknown country!';
	const iso = require('./iso.json');
	return Object.keys(iso).filter(i => iso[i] == country); 
}

function getISOCountry(iso) {
	if (!iso || iso == '') return 'unknown ISO!';
	return require('./iso.json')[iso];
}


export { getCountries, getCountryNames, getCountryNamesKeys, getCities, getCitiesKeys, getCityGeo, getCountryISO, getISOCountry };
