export const getMovies = (inputValue, searchOption, sortOption, offsetMovie) => {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortOption}&sortOrder=desc&search=${inputValue}&searchBy=${searchOption}&offset=${offsetMovie}&limit=12`)
    .then((response) => response.json());
};
