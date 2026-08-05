const API_KEY = 'trilogy'; // Public demo key with rate limits

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const statusMessage = document.getElementById('statusMessage');
    const resultsContainer = document.getElementById('resultsContainer');
    const detailContainer = document.getElementById('detailContainer');

    // Helper to manage UI loading states cleanly
    function setStatus(message, type = 'loader') {
      statusMessage.className = type;
      statusMessage.textContent = message;
      console.log(` Message : ${message} and Type: ${type}`);
    }

    // 1. PRIMARY ASYNC FUNCTION: Fetching a list of movies based on search input
async function searchMovies(query) {
      if (!query.trim()) return;

      // Clear previous results and show loading
      resultsContainer.innerHTML = '';
      detailContainer.innerHTML = '';
      setStatus('Searching movies...');

      try {
        // Await the fetch network call
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
        
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.Response === 'False') {
          throw new Error(data.Error || 'No movies found.');
        }

        setStatus('', ''); // Clear loader
        displayMovieList(data.Search);

      } catch (error) {
        setStatus(`Error: ${error.message}`, 'error');
      }
    }

    // 2. DEPENDENT ASYNC FUNCTION: Fetching deep details when a user clicks a movie
    async function fetchMovieDetails(imdbID) {
      detailContainer.innerHTML = '';
      setStatus('Fetching movie details...');

      try {
        // This is a dependent request: it waits for the ID chosen from the list above
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`);
        
        if (!response.ok) throw new Error('Failed to fetch details.');

        const movie = await response.json();
        
        setStatus('', '');
        displayMovieDetails(movie);

      } catch (error) {
        setStatus(`Error: ${error.message}`, 'error');
      }
    }

    // UI Render Helpers
    function displayMovieList(movies) {
      resultsContainer.innerHTML = '<h3>Select a movie for details:</h3>';
      
      movies.forEach(movie => {
        const div = document.createElement('div');
        div.className = 'movie-item';
        div.textContent = `${movie.Title} (${movie.Year})`;
        
        // When clicked, trigger the dependent async detail fetcher
        div.addEventListener('click', () => fetchMovieDetails(movie.imdbID));
        
        resultsContainer.appendChild(div);
      });
    }

    function displayMovieDetails(movie) {
      detailContainer.innerHTML = `
        <div class="card">
          <h2>${movie.Title} (${movie.Year})</h2>
          <p><strong>Genre:</strong> ${movie.Genre}</p>
          <p><strong>Director:</strong> ${movie.Director}</p>
          <p><strong>Plot:</strong> ${movie.Plot}</p>
          <p><strong>IMDb Rating:</strong> ⭐ ${movie.imdbRating}</p>
        </div>
      `;
    }

    // Event Listeners
    searchBtn.addEventListener('click', () => {
      searchMovies(searchInput.value);
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchMovies(searchInput.value);
      }
    });