const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGI0NDkyODNjN2I0MzZlYTExYjg1Zjg1YTRjNTEwNiIsIm5iZiI6MTcyMTk2Nzg5OC4xMDE2NTgsInN1YiI6IjY2YTMxOTQ3ZGVmMjYyMGNlM2UxMTM0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bZErfytwpWtl_VxWK-ggrjCx3piyoJ5zbP7XwywibiM",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

  function createMovieCard(movie) {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p>${movie.overview}</p>
    <span>Rating: ${movie.vote_average}</span>
  `;
    card.addEventListener("click", () => alert(`Movie ID: ${movie.id}`));
    return card;
  }

    fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1")
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        const movieContainer = document.getElementById("movie-container");
        movies.forEach((movie) => {
          const card = createMovieCard(movie);
          movieContainer.appendChild(card);
        });
      })
      .catch((error) => console.error("Error:", error));

document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-input").value.toLowerCase();
  const movieCards = document.querySelectorAll(".movie-card");
  movieCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

