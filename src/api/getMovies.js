export const getMovies = (inputValue, searchOption, sortOption) => {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortOption}&sortOrder=desc&search=${inputValue}&searchBy=${searchOption}&limit=12`)
    .then((response) => response.json());
};
