import { IMovie } from "./models/Movie";

export const movieSort = (movies: IMovie[], desc: boolean = true) => {
  // definitionen av funktionen och vilka
  // parametrar som/behöver skall tas in
  const sortedMovies = movies.sort((a: IMovie, b: IMovie) => {
    // sort är inbyggd funktion i objektet
    //movies (eftersom det är av datatypen array = array.sort).
    // return movies
    if (desc) {
      if (a.Title > b.Title) return 1;
      if (a.Title < b.Title) return -1; //detta är hur den inbyggda sort funktionen fungerar.
      // eftersom funktionen innehåller en boolean kan den fungera som en toggle - if or else.
      return 0;
    } else {
      if (a.Title > b.Title) return -1;
      if (a.Title < b.Title) return 1;

      return 0;
    }
  });
  return sortedMovies; // lagrar returnen i en variabel istället och lade den här för att
  //förstå bättre när returnen kommer i processen
};
