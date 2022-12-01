import { IMovie } from "../../models/Movie";

export const mockData: IMovie[] = [
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

export const getData = async () => {
  //en funktion som vi exporterar i denna modul.
  return new Promise((resolve) => {
    resolve(mockData);
  });
};
