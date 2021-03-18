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

/*const whereAmI = (lat, lng) => {
  // Fetching the geolocation API
  return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`There was too much request. ${res.status}`);
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
*/

/* const lotteryPromise = new Promise((resolve, reject) => {
  // executor
  // console.log('Lotter draw is happening');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You win, u piece of shit!');
    } else {
      reject(new Error('You lost your money, fucking retard.'));
    }
  }, 2000);
});
*/

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying setTimeout

/* const wait = seconds => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

wait(1)
  .then(() => {
    console.log('Waited for 1 seconds');
    return wait(1);
  })
  .then(() => console.log('Waited for 2 seconds'));

Promise.resolve('Pedro gay').then(x => console.log(x));
Promise.reject(new Error('Pedro TS modinha is on.')).catch(x => console.log(x));
*/

/* const getPosition = () => {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}; */

/* 
const whereAmI = () => {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    // Fetching the geolocation API
    .then(res => {
      if (!res.ok) throw new Error(`There was too much request. ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
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

btn.addEventListener('click', whereAmI);
*/

// Função que cria uma promise
const wait = seconds => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

const imageContainer = document.querySelector('.images');

// Função que cria uma promise e retorna uma imagem.
const createImage = imagePath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imagePath;

    img.addEventListener('load', () => {
      imageContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('Image not found.'));
    });
  });
};

let currentImg;

const loadNPause = async () => {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    let img2 = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img2.style.display = 'none';
  } catch (error) {}
};
/* loadNPause(); */
const loadAll = async imgsArr => {
  try {
    const imgs = imgsArr.map(async img => await createImage(img));

    const imgsEl = await Promise.all(imgs);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (error) {}
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

/* 
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 3 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })

  .catch(err => console.log('Deu ruim', err));
*/

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

/* const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    console.log(pos);
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

    if (!resGeo.ok) throw new Error(`Problem getting location data.`);

    const dataGeo = await resGeo.json();

    // Country data
    const resCountry = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    if (!resGeo.ok) throw new Error(`Problem getting country data.`);

    const dataCountry = await resCountry.json();
    renderCountry(dataCountry[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.region}.`;
  } catch (err) {
    renderError(`${err.message}`);
    // Reject promise returned from async function
    throw err;
  }
};

(async () => {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (error) {
    console.log(error.message);
  }
})();
 */

const getJSON = (url, errorMsg = 'Something went wrong!') => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

const get3Countries = async (c1, c2, c3) => {
  try {
    /* const [data1] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c1}`
    );
    const [data2] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c2}`
    );
    const [data3] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c3}`
    );
 */
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};

// get3Countries('brazil', 'germany', 'netherlands');

// Promise.race
(async () => {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/brazil`),
    getJSON(`https://restcountries.eu/rest/v2/name/germany`),
  ]);
  /*   console.log(res[0]);
   */
})();
