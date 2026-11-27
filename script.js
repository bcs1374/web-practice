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
    const books = data.docs;

    // Just show the first 10 results
    const firstTen = books.slice(0, 10);

    for (const book of firstTen) {
      const li = document.createElement('li');

      const title = book.title || 'Untitled book';
      const authors = book.author_name ? book.author_name.join(', ') : 'Unknown author';

      li.textContent = `${title} — ${authors}`;
      resultsList.appendChild(li);
    }
  } catch (error) {
    console.error('Search error:', error);
    statusMessage.textContent = 'Something went wrong with the search. Please try again.';
  }
});