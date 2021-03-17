'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = (data, className = '') => {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src=${data.flag} />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}k people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article> `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// XMLHttpRequest

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     const html = `
//     <article class="country">
//       <img class="country__img" src=${data.flag} />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article> `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// // getCountryData('angola');
// getCountryData('sweden');

// const getCountryandNeighbour = function (country) {
//   // Make a request to the server
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country
//     const [neighbour] = data.borders;

//     // If there's no neighbour => Guard cause
//     if (!neighbour) return;

//     // Make another request.
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryandNeighbour('sweden');

//const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

// Fetch
// const request = fetch(`https://restcountries.eu/rest/v2/name/brazil`);

// const getCountryData = country => {
//   // country 2
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {}) // Resposta pendente
//     .then(data => {
//       renderCountry(data[0]); // Renderizando o país
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;
//       // country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong. ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
/*
const getJSON = (url, errorMsg = 'Something went wrong!') => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = country => {
  // country 2
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]); // Renderizando o país
      const neighbour = data[0].borders[0];

      // Error handler
      if (!neighbour) throw new Error('No neighbour found!');

      // country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found.'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      renderError(`Something went wrong. ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});
*/
// getCountryData('fdsafdsdsf');

const whereAmI = (lat, lng) => {
  // Fetching the geolocation API
  return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`There was too request. ${res.status}`);
      return res.json();
    })
    .then(data => {
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`${errorMsg} (${res.status})`);
      }
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err =>
      console.error(`Something went wrong. ${err.message}. Try again!`)
    );
};

whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.837);
// whereAmI(-33.933, 18.474);
