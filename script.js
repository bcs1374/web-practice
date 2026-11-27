const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const statusMessage = document.getElementById('status-message');
const resultsList = document.getElementById('results-list');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();

  // For now, just show what the user typed
  statusMessage.textContent = `You searched for: "${query}"`;

  // Clear out old results
  resultsList.innerHTML = '';
});