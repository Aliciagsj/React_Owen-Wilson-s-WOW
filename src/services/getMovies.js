const getMovies = () => {
  return fetch(
    "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50"
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((item, index) => {
        return {
          id: index,
          movie: item.movie,
          year: item.year,
          full_line: item.full_line,
          poster: item.poster,
          audio: item.audio,
          director: item.director,
        };
      });
      return cleanData;
    });
};

export default getMovies;
