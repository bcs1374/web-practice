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