const countryName = document.querySelector('#country-name');
const countryInput = document.querySelector('#country-input');
const updateButton = document.querySelector('#update-country');

updateButton.addEventListener('click', function () {
  const newName = countryInput.value;
  countryName.textContent = newName;
});