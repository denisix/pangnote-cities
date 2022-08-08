# pangnote-cities
Country & City Names, including GEO coordinates (Lat, Lng) + country ISO name and full name

## API
- getCountries() - get array of countries

```javascript
const p = require('pangnote-cities')
p.getCountries()
/*
[
  ...,
  {
    name: {
      common: 'Ukraine',
      official: 'Ukraine',
      native: { common: 'Україна', official: 'Україна' }
    },
    tld: [ '.ua', '.укр' ],
    cca2: 'UA',
    ccn3: '804',
    cca3: 'UKR',
    currency: [ 'UAH' ],
    callingCode: [ '380' ],
    capital: 'Kiev',
    altSpellings: [ 'UA', 'Ukrayina' ],
    relevance: '0',
    region: 'Europe',
    subregion: 'Eastern Europe',
    nativeLanguage: 'ukr',
    languages: { ukr: 'Ukrainian' },
    translations: {
      deu: 'Ukraine',
      fra: 'Ukraine',
      hrv: 'Ukrajina',
      ita: 'Ucraina',
      jpn: 'ウクライナ',
      nld: 'Oekraïne',
      por: 'Ucrânia',
      rus: 'Украина',
      spa: 'Ucrania'
    },
    latlng: [ 49, 32 ],
    demonym: 'Ukrainian',
    borders: [
      'BLR', 'HUN',
      'MDA', 'POL',
      'ROU', 'RUS',
      'SVK'
    ],
    area: 603500
  },
  ...
]
*/
```

- getCountryNames() - get array of country names

```javascript
const p = require('pangnote-cities')
p.getCountryNames()
// [ 'Afghanistan', 'Åland Islands', 'Albania', 'Algeria', ...]
```

- getCities('Ukraine') - get city names of Ukraine

```javascript
const p = require('pangnote-cities')
p.getCities('Ukraine')
/*
[
  'Kyiv',
  'Kharkiv',
  'Odesa',
  "L'viv",
  'Adancata',
  "Dnipropetrovs'k",
  "Donets'k",
  'Zaporizhzhya',
  "Simferopol'",
  "Luhans'k",
  'Cherkasy',
  "Ternopil'",
  ...
]
*/
```

- getCountryGeo('Ukraine') - get country GEO location [lat, lng]

```javascript
const p = require('pangnote-cities')
p.getCountryGeo('Ukraine')
// [ 49, 32 ]
```

- getCityGeo('Ukraine', 'Kharkiv')- get city GEO location [lat, lng]

```javascript
const p = require('pangnote-cities')
p.getCityGeo('Ukraine', 'Kharkiv')
// [ 49.9808, 36.2527 ]
```

- getCountryISO('Ukraine') - get ISO code by country name: Ukraine -> UA

```javascript
const p = require('pangnote-cities')
p.getCountryISO('Ukraine')
// 'UA'
```

- getISOCountry('UA') - get country name by ISO code: UA -> Ukraine

```javascript
const p = require('pangnote-cities')
p.getISOCountry('UA')
// 'Ukraine'
```
