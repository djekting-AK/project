"use strict";

// const numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "");
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("Один из последних фильмов?", ""),
//   b = prompt("Ваша оценка фильма?", ""),
//   c = prompt("Один из последних фильмов?", ""),
//   d = prompt("Ваша оценка фильма?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

/////////////////////////////////////////////////////////////////

// let key = 50;
// switch ("key") {
//   case 46 + 14:
//     console.log("true");
//     break;
//   case "key":
//     console.log("true");
//     break;
//   default:
//     console.log("false");
//     break;
// }

// let num = 50;

// // while (num < 55) {
// //   console.log(num);
// //   num++;
// // }

// do {
//   console.log(num);
//   num++;
// } while (num < 55);

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     continue;
//   }
//   console.log(i);
// }

//////////////////////////////////////////////////////////////////

// const numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "2");
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < numberOfFilms; i++) {
//   let a;
//   let b;
//   do {
//     if (a != undefined) {
//       console.log('a == null || a == "" || a.length >= 50');
//     }

//     a = prompt("Один из последних фильмов?", "");
//   } while (a == null || a == "" || a.length >= 50);

//   do {
//     if (b != undefined) {
//       console.log('b == null || b == ""');
//     }

//     b = prompt("Ваша оценка фильма?", "");
//   } while (b == null || b == "");

//   personalMovieDB.movies[a] = b;
// }

// console.log(personalMovieDB);

// if (personalMovieDB.count < 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("Произошла ошибка");
// }

//////////////////////////////////////////////////////////////////

// function calc(a, b) {
//   return a + b;
// }

// let calc2 = function (a, b) {
//   return a + b;
// };

// console.log(calc(1, 3));

// let calc3 = (a, b) => {
//   return a + b;
// };

//////////////////////////////////////////////////////////////////

// let str = "test some";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.indexOf("some"));

// const logg = "Hello world";
// console.log(logg.slice(6, 11));
// console.log(logg.slice(6));
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11));

// const num = "12.2px";
// console.log(parseInt(num));

//////////////////////////////////////////////////////////////////

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

function remmemberMyFilms() {
  for (let i = 0; i < numberOfFilms; i++) {
    let a;
    let b;
    do {
      if (a != undefined) {
        console.log('a == null || a == "" || a.length >= 50');
      }

      a = prompt("Один из последних фильмов?", "");
    } while (a == null || a == "" || a.length >= 50);

    do {
      if (b != undefined) {
        console.log('b == null || b == ""');
      }

      b = prompt("Ваша оценка фильма?", "");
    } while (b == null || b == "");

    personalMovieDB.movies[a] = b;
  }
}

remmemberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre;
    do {
      genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
    } while (genre == null || genre == "");
    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
