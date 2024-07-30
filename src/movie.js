export function createMovieCard(movie) {
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


