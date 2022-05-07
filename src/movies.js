// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);//



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let allDirectors = movies.map(function (movie) {
    return movie.director
  })
  return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielbergMovies = movies.filter(function (movie) {
    return movie.director === 'Steven Spielberg';
  })
  let spielbergDramas = spielbergMovies.filter(function (movie) {
    return movie.genre.includes('Drama')
  })
  return spielbergDramas.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let result = 0
  let average = 0
  if (movies.length < 1) {
    return 0
  }
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].score)
      result += movies[i].score
  }
  average = result / movies.length;
  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramas = movies.filter(function (movie) {
    return movie.genre.includes('Drama')
  })
  let result = 0
  let average = 0
  if (dramas.length < 1) {
    return 0
  }
  for (let i = 0; i < dramas.length; i++) {
    if (dramas[i].score)
      result += dramas[i].score
  }
  average = result / dramas.length;
  return Math.round(average * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let copyMovies = movies.slice()
  copyMovies.sort(function (a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1
    }
    if (a.year === b.year) {
     
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }

      
      return 0;
    }

  })
  return copyMovies;
}

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
