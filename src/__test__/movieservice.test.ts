/**
 *@jest-environment jsdom
 */
import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";
import { test, expect, jest } from "@jest/globals";
import { mockData } from "../ts/services/__mocks__/movieservice";

// här ska jag mocka axios...

jest.mock("axios", () => ({
  get: async () => {
    //här i vår fake axios ska vi skapa det som ska skickas tillbaka -
    //vi vill använda en funktion som heter get - och async
    return new Promise((resolve, reject) => {
      resolve({ data: { Search: mockData } }); //Vi vill ha data.Search inne i data (data.data.Search) och då skriver vi så här.
      //Total results kan man jobba med på exakt samma sätt, då lägger vi istället i det häri, istället för Search.
    });
  },
}));

test("should get mock data", async () => {
  //arrange är min mockdata som jag importerat varpå jag inte behöver arrangera nånting

  // Act
  let response: IMovie[] = await getData("Mockad sökväg"); // getData funktionen kallas på !
  //Assert
  expect(response.length).toBe(mockData.length); // expecta att resonsen ska vara lika lång som mockade (låtsas)listan
  expect(response[0].Title).toBe("The menu");
});

test("should fail to get mock data", async () => {
  let reject: IMovie[] = [];
  try {
    // Act
    reject = await getData("Mockad sökväg");
  } catch {
    //Assert
    expect(reject.length).toBe(mockData.length);
  }
});
