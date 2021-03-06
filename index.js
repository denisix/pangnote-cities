const Pbf = require('pbf')
const fs = require('fs')
const path = require('path')

var pbf = new Pbf(fs.readFileSync(path.join(__dirname, 'cities.pbf')))
var cities = []
var lastLat = 0
var lastLng = 0
var countriesKeys = {}

while (pbf.pos < pbf.length) {
    cities.push(pbf.readMessage(readCity, {
        name: '',
        iso: '',
		country: '',
        lat: 0,
        lng: 0
    }))
}

//module.exports = cities

function readCity(tag, city, pbf) {
	switch(tag) {
		case 1: city.name = pbf.readString(); break;
		case 2: city.iso = pbf.readString(); break;
		case 3: city.country = pbf.readString(); break;
		case 4: lastLat += pbf.readSVarint(); city.lat = lastLat / 1e5; break;
		case 5: lastLng += pbf.readSVarint(); city.lng = lastLng / 1e5; break;
    }
}

function getCountriesKeys() {
	if (Object.keys(countriesKeys).length > 0) {
		return countriesKeys;
	}

	cities.map(i => countriesKeys[i.country]=null)
	return countriesKeys;
}

function getCountryCities(c) {
	let hash = {};
	cities.filter(i => i.country == c).map(i => countriesKeys[i.country]=null)
	return hash;
}

function getISOCities(c) {
	let hash = {};
	cities.filter(i => i.iso == c).map(i => countriesKeys[i.country]=null)
	return hash;
}

export { cities, getCountriesKeys, getCountryCities, getISOCities };

