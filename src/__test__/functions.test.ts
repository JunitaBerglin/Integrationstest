/**
 *@jest-environment jsdom
 */

import * as functions from "./../ts/functions";
import { IMovie } from "../ts/models/Movie";

test("should test array from a-ö", () => {
  //arrange, förutsättningar
  const moviesT: IMovie[] = [
    {
      Title: "The menu",
      imdbID: "3456",
      Type: "drama",
      Poster: "urlPic",
      Year: "1934",
    },
    {
      Title: "Black Panther",
      imdbID: "34555",
      Type: "drama",
      Poster: "urlPic2",
      Year: "1933",
    },
    {
      Title: "Andor",
      imdbID: "34555",
      Type: "drama",
      Poster: "urlPic2",
      Year: "1933",
    },
    {
      Title: "Harry Potter",
      imdbID: "34555",
      Type: "drama",
      Poster: "urlPic2",
      Year: "1933",
    },
    {
      Title: "Harry Potter",
      imdbID: "34555",
      Type: "drama",
      Poster: "urlPic2",
      Year: "1933",
    },
  ];
  //act, start av function
  const x = true;
  functions.movieSort(moviesT, x);
  //assert, förväntningar -> expect(received).toBe(expected)
  expect(x).toBe(true);
  expect(moviesT[1].Title).toBe("Black Panther");
});

test("should test array from ö-a", () => {
  //arrange, förutsättningar
  const moviesT: IMovie[] = [
    {
      Title: "The menu",
      imdbID: "3456",
      Type: "drama",
      Poster: "urlPic",
      Year: "1934",
    },
    {
      Title: "Black Panther",
      imdbID: "34555",
      Type: "drama",
      Poster: "urlPic2",
      Year: "1933",
    },
    {
      Title: "Andor",
      imdbID: "34555",
      Type: "drama",
      Poster: "urlPic2",
      Year: "1933",
    },
    {
      Title: "Harry Potter",
      imdbID: "34555",
      Type: "drama",
      Poster: "urlPic2",
      Year: "1933",
    },
    {
      Title: "Harry Potter",
      imdbID: "34555",
      Type: "drama",
      Poster: "urlPic2",
      Year: "1933",
    },
  ];
  //act, start av function
  const y = false;
  functions.movieSort(moviesT, y);
  //assert, förväntningar -> expect(received).toBe(expected)
  expect(y).toBe(false);
  expect(moviesT[1].Title).toBe("Harry Potter");
  expect(moviesT[0].Title).toBe("The menu");
});
