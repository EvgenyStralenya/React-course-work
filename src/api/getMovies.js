export const getMovies = ({
  inputValue, searchOption, sortOption, offsetMovie, limitMovie,
}) => {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortOption}&sortOrder=desc&search=${inputValue}&searchBy=${searchOption}&offset=${offsetMovie}&limit=${limitMovie}`)
    .then((response) => response.json());
};
