const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const statusMessage = document.getElementById('status-message');
const resultsList = document.getElementById('results-list');

searchButton.addEventListener('click', async () => {
  const query = searchInput.value.trim();

  if (!query) {
    statusMessage.textContent = 'Please type something to search.';
    resultsList.innerHTML = '';
    return;
  }

  statusMessage.textContent = 'Searching...';
  resultsList.innerHTML = '';

  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log('Full response data:', data);
    statusMessage.textContent = `Found ${data.numFound} results (showing first few below).`;
  } catch (error) {
    console.error('Search error:', error);
    statusMessage.textContent = 'Something went wrong with the search. Please try again.';
  }
});