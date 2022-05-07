// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  filter = movies.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))

  return filter.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let average = moviesArray.reduce((previousMean, currentMovie) => {
      console.log(currentMovie.score);

      if (currentMovie.score === '' || currentMovie.score === undefined) {
        return previousMean;
      }
      else {
        return previousMean + currentMovie.score / moviesArray.length;
      }
    }, 0);
  
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  return scoresAverage(moviesArray.filter(movie => movie.genre.includes("Drama")));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesfilter = movies.map((el) => el)
  return moviesfilter.sort((a,b) => b.year - a.year).reverse()
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let moviesfilter = movies.map((el) => el)
  let result = []
  moviesfilter.sort((a,b) => a.title.localeCompare(b.title))
  moviesfilter.splice(20, Infinity)

  moviesfilter.forEach(element => {
    result.push(element.title)
  });

  return result
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let updatedDurations = moviesArray.map(movie => {

    // A whole new object is created to prevent modifying the original array
    let updatedMovie = {
      title:    movie.title,
      year:     movie.year,
      director: movie.director,
      duration: movie.duration,
      genre:    movie.genre,
      score:    movie.score
    };

    // Extracting hours ("Xh") and minutes ("Ymin")
    const hours   = updatedMovie.duration.split(' ')[0];
    const minutes = updatedMovie.duration.split(' ')[1] || '0';

    // Modifying the movie duration with the number of minutes
    updatedMovie.duration = Number(hours.slice(0, -1) * 60) + Number(minutes.slice(0, -3));

    return updatedMovie;
  });

  return updatedDurations;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0){ return null }
  let moviesfilter = movies.map((el) => el)

  let years = [];
  let averages = [];
  let result = [];

  // Get all the years
  moviesfilter.map(movie => {
    if (!years.includes(movie.year)) {
      years.push(movie.year);
    }
  });

  // 
  averages = years.map(year => ({
    year: year,
    average: scoresAverage(moviesfilter.filter(movie => movie.year === year))
  }));

  // Best score sort
  averages.sort((a,b) => a.average - b.average).reverse()

  return `The best year was ${averages[0].year} with an average score of ${averages[0].average}`
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

