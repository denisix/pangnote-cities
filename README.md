# pangnote-cities

Country & City Names, including coordinates (Lat, Lng) + country ISO name and full name

Derived from the [cities1000](https://www.npmjs.com/package/cities1000) npm package, which in turn came from [geonames.org data](http://download.geonames.org/export/dump/).

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install pangnote-cities --save
```

## Usage

```js
const cities = require("pangnote-cities")

cities.filter(city => {
  return city.name.match('Albuquerque')
})

// [{
//   name: 'Albuquerque',
//   iso: 'US',
//   country: 'United States',
//   lat: 35.08449,
//   lon: -106.65114
// }, {
//   name: 'Los Ranchos de Albuquerque',
//   iso: 'US',
//   country: 'United States',
//   lat: 35.16199,
//   lon: -106.6428
// }]

```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [cities1000](https://github.com/substack/cities1000): lat/lon, names of cities with over 1000 people
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers
- [split2](https://github.com/mcollina/split2): split a Text Stream into a Line Stream, using Stream 3
- [through2](https://github.com/rvagg/through2): A tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise


## License

MIT
