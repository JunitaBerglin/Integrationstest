/**
 *@jest-environment jsdom
 */
import { mockData } from "../ts/services/__mocks__/movieservice";
import * as functions from "../ts/movieApp";
import { IMovie } from "../ts/models/Movie";

test("listen upon click/submit call function handleSubmit", () => {
  let spy = jest.spyOn(functions, "handleSubmit").mockReturnValue(
    new Promise<void>((resolve) => {
      // måste skriva mockreturn new Promise för det är en async function. då
      //får jag ett promise tillbaka som jag vill specificera resolve() = (ingenting)
      resolve();
    })
  );

  document.body.innerHTML = `<form id="searchForm">
  <input type="text" id="searchText" placeholder="Skriv titel här" />
  <button type="submit" id="search">Sök</button>
</form>
<div id="movie-container"></div>`;

  functions.init();

  //act
  (
    document.getElementById("searchForm") as HTMLFormElement
  )?.submit();
  // ovanstående simulerar klickknapp/submit på vår button som triggar submit
  //på formuläret vi lyssnar på (klicket vandrar uppåt till vår addeventlistener på formuläret)

  //assert
  expect(spy).toHaveBeenCalled();
});

test("should display no result message", () => {
  // arrange
  document.body.innerHTML = `<div id="movie-container"></div>`;
  let container = document.getElementById(
    "movie-container"
  ) as HTMLDivElement;
  //act
  functions.displayNoResult(container);

  //assert
  expect(container.innerHTML).toContain("Inga sökresultat att visa");
});

test("should create html", () => {
  //arrange
  const movies: IMovie[] = mockData;
  document.body.innerHTML = `<div id="movie-container"></div>`;
  let movieContainer = document.getElementById(
    "movie-container"
  ) as HTMLDivElement;
  //act
  functions.createHtml(movies, movieContainer);
  //assert
  expect(movies[3].Title).toBe("Harry Potter");
  expect(movieContainer.innerHTML).toContain("Black Panther");
  expect(document.querySelectorAll(".movie").length).toBe(
    mockData.length
  );
});
