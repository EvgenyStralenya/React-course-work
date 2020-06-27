export const getMovieById = (id) => {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
    .then((response) => response.json());
};
