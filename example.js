const cities = require('.')

cities.filter(city => {
  return city.name.match('Albuquerque')
})

// [{
//   name: 'Albuquerque',
//   iso: 'US',
//	 country: 'United States',
//   lat: 35.08449,
//   lon: -106.65114
// }, {
//   name: 'Los Ranchos de Albuquerque',
//   iso: 'US',
//	 country: 'United States',
//   lat: 35.16199,
//   lon: -106.6428
// }]
