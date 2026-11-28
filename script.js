const countryName = document.querySelector('#country-name');
const countryName2 = document.querySelector('#country-name2');
const countryInput = document.querySelector('#country-input');
const updateButton = document.querySelector('#update-country');

updateButton.addEventListener('click', function () {
  const newName = countryInput.value;
  countryName.textContent = newName;
});

countryInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const newName = countryInput.value;
    countryName.textContent = newName;
  }
});

updateButton.addEventListener('click', async function () {
  const newName = countryInput.value;
  const url = `https://countries.dev/name/${newName}`;
  console.log(url);

  const response = await fetch(url);
  const data = await response.json();

  

  const country = data[0]; // first match
  console.log('country:', country);
  console.log(data);
  countryName.textContent = country.name;
  // later: set capital, region, population, etc.\
  const countryCapital = document.querySelector('#country-capital');
  console.log('capital element:', countryCapital);
  const countryRegion = document.querySelector('#country-region');
  const countryPopulation = document.querySelector('#country-population');
  console.log('capital element:', countryCapital);
  console.log('region element:', countryRegion);
  console.log('population element:', countryPopulation);
// ...

  countryName2.textContent = country.name;
  countryCapital.textContent = country.capital;
  countryRegion.textContent = country.region;
  countryPopulation.textContent = country.population;
});

