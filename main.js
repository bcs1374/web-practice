console.log("JS file loaded ✅");

const title = document.getElementById("page-title"); // 👈 typo on purpose
title.textContent = "Script is working!";

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const input = document.querySelector('input');
  if (input.value.trim() === '') {
    return;
  }
  const li = document.createElement('li');  // 1) create a new <li> (not on the page yet)
  li.textContent = input.value;            // set its text

      // 1) create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';



    // 2) put it inside the li
    li.appendChild(deleteButton);

    // 3) when button is clicked, remove the li
    deleteButton.addEventListener('click', function (event) {
      event.stopPropagation();
      li.remove();
    });
    li.addEventListener('click', function () {
    console.log('Clicked!', li.classList);
    li.classList.toggle('done');
    console.log('After toggle', li.classList);
    
    });
  

  const list = document.querySelector('ul');  // your existing <ul>
  list.appendChild(li);  
  console.log('Task:', input.value);
  input.value = '';     
});

const clearAllButton = document.querySelector('#clear-all');

clearAllButton.addEventListener('click', function () {
  const list = document.querySelector('#tasks');
  list.innerHTML = '';
});