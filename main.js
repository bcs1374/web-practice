function handleButtonClick() {
  message.textContent = 'Button was clicked!';
}

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


const link = document.querySelector('#link');

link.href = "http://google.com";
tagline.style.color = 'orange';
tagline.style.backgroundColor = 'black';
title.style.fontSize = '32px';

const button = document.querySelector('#magic-button');
const message = document.querySelector('#message');

button.addEventListener('click', handleButtonClick());

const nameInput = document.querySelector('#name-input');
const greeting = document.querySelector('#greeting');

nameInput.addEventListener('input', function () {
  greeting.textContent = 'Hello, ' + nameInput.value + '!';
});