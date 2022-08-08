const expect = require('assert'),
  eq = expect.deepEqual,
  {
    getCountries,
    getCountryNames,
    getCities,
    getCountryGeo,
    getCityGeo,
    getCountryISO,
    getISOCountry
  } = require('.'),
  ok = i => console.log('OK', i)

// getCountries
const countries = getCountries()
eq(countries.length, 250)
eq(countries.find(i => i.cca2 === 'UA').name.common, 'Ukraine')
ok('getCountries()')

// getCountryNames
const cnames = getCountryNames()
eq(cnames.length, 250)
eq(
  cnames.find(i => i === 'Ukraine'),
  'Ukraine'
)
ok('getCountryNames()')

// getCities
const cities = getCities('Ukraine')
eq(cities.length, 106)
eq(
  cities.find(i => i === 'Kharkiv'),
  'Kharkiv'
)
ok('getCities()')

// getCountryGeo
eq(getCountryGeo('Ukraine'), [49, 32])
ok('getCountryGeo()')

// getCityGeo
eq(getCityGeo('Ukraine', 'Kharkiv'), [49.9808, 36.2527])
ok('getCityGeo()')

// getCountryISO
eq(getCountryISO('Ukraine'), 'UA')
ok('getCountryISO()')

// getISOCountry
eq(getISOCountry('UA'), 'Ukraine')
ok('getISOCountry()')
