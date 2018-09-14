# pangnote-cities 
Country & City Names, including coordinates (Lat, Lng) + country ISO name and full name

## Inspired by & thank you to:
[Maroof Khan](https://www.npmjs.com/package/countries-cities)

[Restcountries.eu](https://restcountries.eu/)

## Example usage

``` javascript
var countries = require ('full-countries-cities').getCountries(); // Returns a full array of country information.
var countriesNames = require ('full-countries-cities').getCountryNames(); // Returns a full array of only the country names.
var cities = require ('full-countries-cities').getCities(country_name); // Returns an array of city names of the particular country.
var regions = require ('full-countries-cities').getRegions(country_code); // Returns an array of region of the particular country.
var asn = require ('full-countries-cities').getASNS(country_name); // Returns an array of ASN of the particular country.
