const countryName = document.querySelector('#country-name');
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

  const response = await fetch(url);
  const data = await response.json();

  const country = data[0]; // first match
  console.log(data)
  countryName.textContent = country.name;
  // later: set capital, region, population, etc.
});