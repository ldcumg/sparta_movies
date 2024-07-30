import { createMovieCard } from "./movie.js";
// import { searchInput } from "./search.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGI0NDkyODNjN2I0MzZlYTExYjg1Zjg1YTRjNTEwNiIsIm5iZiI6MTcyMjMxMjkxMC4zNTk1MTksInN1YiI6IjY2YTMxOTQ3ZGVmMjYyMGNlM2UxMTM0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oo_Kalm3qFM4lchYl-6LkK2ju1ks9-Fx2pxbEA6JNzo"
  }
};

fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

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

  const searchInput = document.querySelector("#search-input");
searchInput.focus();
  
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
