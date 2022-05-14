// The `movies` array from the file `src/data.js`.

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrFilm) {
  const allDirectors = arrFilm.map(function (filmEl) {
    return filmEl.director
  })
  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(movies) {
//   const AllMovies = movies.filter (function(filmEl){
//     filmEL.director === 'Steven Spielberg'

//   })
//   return AllMovies
// }
function howManyMovies(movies) {
  const allMovies = movies.filter(function (filmEL) {
    return filmEL.director === 'Steven Spielberg'
  })
    .filter(function (filmEl) {
      return filmEl.genre.includes('Drama')
    })
  return (allMovies.length)
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(filmEl) {
  if (filmEl.length === 0) {
    return 0
  };

  const scoresAvg = filmEl.reduce(function (accumulator, currentValue) {
    if (!currentValue.score) {
      currentValue.score = 0;
    };
    return accumulator + currentValue.score
  }, 0);
  const scoreMoyen = (scoresAvg / filmEl.length);
  return Number(scoreMoyen.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() { }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
