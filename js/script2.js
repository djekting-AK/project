"use strict";

//////////////////////////////////////////////////////////////////

// let str = "some";
// let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

// console.log([1, 2, 3]);

// const solder = {
//   health: 400,
//   armor: 100,
//   sayHello: function () {
//     console.log("Hello");
//   },
// };

// // const john = {
// //   health: 100,
// //   __proto__: solder, // такая запить прототипа устарела
// // };

// const john = Object.create(solder);

// Object.setPrototypeOf(john, solder);
// console.log(john.armor);
// john.sayHello();

//////////////////////////////////////////////////////////////////

// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: true,

//   start: function () {
//     personalMovieDB.count = +prompt("Сколько фильмов вы смотрели?", "");
//     while (
//       personalMovieDB.count == "" ||
//       personalMovieDB.count == null ||
//       isNaN(personalMovieDB.count)
//     ) {
//       personalMovieDB.count = +prompt("Сколько фильмов вы смотрели?", "");
//     }
//   },

//   remmemberMyFilms: function () {
//     for (let i = 0; i < personalMovieDB.count; i++) {
//       let a;
//       let b;
//       do {
//         if (a != undefined) {
//           console.log('a == null || a == "" || a.length >= 50');
//         }

//         a = prompt("Один из последних фильмов?", "");
//       } while (a == null || a == "" || a.length >= 50);

//       do {
//         if (b != undefined) {
//           console.log('b == null || b == ""');
//         }

//         b = prompt("Ваша оценка фильма?", "");
//       } while (b == null || b == "");

//       personalMovieDB.movies[a] = b;
//     }
//   },

//   detectPersonalLevel: function () {
//     if (personalMovieDB.count < 10) {
//       console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//       console.log("Вы киноман");
//     } else {
//       console.log("Произошла ошибка");
//     }
//   },

//   showMyDB: function (hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },

//   toggleVisibleMyDB: function () {
//     personalMovieDB.privat = personalMovieDB.privat ? false : true;
//   },

//   writeYourGenres: function () {
//     for (let i = 1; i <= 3; i++) {
//       let genre;
//       do {
//         genre = prompt(`Ваш любимый жанр под номером ${i}`, "").toLowerCase();
//       } while (genre == null || genre == "");
//       personalMovieDB.genres[i - 1] = genre;
//     }
//     personalMovieDB.genres.forEach((element, index) => {
//       console.log(`Любимый жанр # ${index + 1} - это ${element}`);
//     });
//   },
// };

// personalMovieDB.start();

// personalMovieDB.remmemberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.writeYourGenres();

// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);

//////////////////////////////////////////////////////////////////
