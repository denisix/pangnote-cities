module.exports = {
	getCountries: () => {
		return require('./countries.json')
	},
	getCountryNames: () => {
		return require('./countries.json').map(c => c.name.common)
	},
	getCountryNamesKeys: () => {
		let hash = {};
		require('./countries.json').map(c => hash[c.name.common]=null)
		return hash;
	},
	getCities: (country) => {
		if (!country || country == '') return 'unknown country!';
		const s = country.split(" ");
		country = null;
		s.forEach(split => {
				split = split.charAt(0).toUpperCase() + split.slice(1);
				country = ((country) ? (country + ' ' + split) : split);
		});
		
		var data = require('./cities.json') // data : [country : [cities]]
		return data["countries"][country];
	},
	getCitiesKeys: (country) => {
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
	},
	getCityGeo: (city) => {
		return require('./geo.json')[city];
	},
	getCountryISO: (country) => {
		if (!country || country == '') return 'unknown country!';
		const iso = require('./iso.json');
		return Object.keys(iso).filter(i => iso[i] == country); 
	},
	getISOCountry: (iso) => {
		if (!iso || iso == '') return 'unknown ISO!';
		return require('./iso.json')[iso];
	}
}
