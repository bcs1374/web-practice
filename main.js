console.log("JS file loaded ✅");

const title = document.getElementById("page-title"); // 👈 typo on purpose
title.textContent = "Script is working!";

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Form was submitted!');
});