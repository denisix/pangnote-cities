const test = require('tape')
const cities = require('../pangnote-cities')

test('pangnote-cities', function (t) {
  t.plan(7)
  t.ok(Array.isArray(cities), 'cities is an array')
  t.ok(cities.length > 10000, 'cities contains 10,000 of cities')
  t.ok(cities[0].name, 'cities have a name')
  t.ok(cities[0].iso, 'cities have a country ISO code')
  t.ok(cities[0].country, 'cities have a country name')
  t.ok(cities[0].lat, 'cities have a lat')
  t.ok(cities[0].lng, 'cities have a lon')
})
