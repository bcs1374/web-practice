const heading = document.getElementById("page-title");
console.log(heading);

const firstTitle = document.querySelector(".title");
console.log(firstTitle);

const allTitles = document.querySelectorAll(".title");
console.log(allTitles);

const title = document.querySelector('#page-title');
const tagline = document.querySelector('#tagline');

title.textContent = 'Welcome, Benjamin!';
tagline.textContent = 'This page was just updated with JavaScript.';