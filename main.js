const countries = require('./countries.json')
const cities = require('./cities.json')
const geo = require('./geo.json')
const iso = require('./iso.json')

module.exports = {
  getCountries: () => countries,
  getCountryNames: () => countries.map(c => c.name.common),
  getCities: country => {
    if (!country) return
    const s = country.split(' ')
    country = null
    s.forEach(split => {
      split = split.charAt(0).toUpperCase() + split.slice(1)
      country = country ? country + ' ' + split : split
    })

    return cities['countries'][country]
  },
  getCountryGeo: country => {
    if (!country) return
    const c = countries.find(c => c.name.common === country)
    if (!c) return
    return c.latlng
  },
  getCityGeo: (country, city) => {
    if (!country) return
    const c = geo[country]
    if (!c) return
    return c[city]
  },
  getCountryISO: country => {
    if (!country) return
    return Object.keys(iso).find(i => iso[i] === country)
  },
  getISOCountry: code => {
    if (!code) return
    return iso[code]
  }
}
