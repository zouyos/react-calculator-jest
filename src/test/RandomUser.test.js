import { fireEvent, render, screen } from "@testing-library/react";
import { RandomUser } from "components/RandomUser/RandomUser";
import axios from "axios";
jest.mock("axios");

describe("<RandomUser />", () => {
  it("loads a user when clicking the button", async () => {
    render(<RandomUser />);
    const button = screen.getByRole("button");
    //si on retire la ligne suivante il va faire le test avec la vraie requête, ce qui ne nous intéresse pas forcément de tester
    //là on va "mocker" (une seule fois) la requête avec Jest (bien vérifier dans le package.json que axios est pris en compte par jest)
    axios.get.mockResolvedValueOnce({ data: MOCK_USER_RESPONSE });
    fireEvent.click(button);
    //findBy s'utilise pour les fonctions asynchrones
    const title = await screen.findByTestId("username");
    // expect(title).toBeDefined();
    expect(title.textContent).toBe("Didi Van Zutphen");
  });
});

const MOCK_USER_RESPONSE = {
  results: [
    {
      gender: "female",
      name: { title: "Mrs", first: "Didi", last: "Van Zutphen" },
      location: {
        street: { number: 3828, name: "De Rietakker" },
        city: "Bontebok",
        state: "Utrecht",
        country: "Netherlands",
        postcode: "5402 PO",
        coordinates: { latitude: "30.7819", longitude: "29.4171" },
        timezone: { offset: "-9:00", description: "Alaska" },
      },
      email: "didi.vanzutphen@example.com",
      login: {
        uuid: "3e81651c-7e50-48c6-89b3-d7ffad5d14d1",
        username: "brownswan506",
        password: "popcorn",
        salt: "3uaGWysK",
        md5: "1f91c8275c8504ea9a28bf1970c94e71",
        sha1: "4feb104c1c09b216172ad6c9b8b9a16b1a5b7b51",
        sha256:
          "87799129bd0fa3a1566446d67260f06a20cba47af83d8df9fe5a695655cbd694",
      },
      dob: { date: "1999-02-27T13:57:51.374Z", age: 24 },
      registered: { date: "2021-11-15T13:05:28.073Z", age: 2 },
      phone: "(0070) 285056",
      cell: "(06) 69764735",
      id: { name: "BSN", value: "36996116" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/65.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/65.jpg",
      },
      nat: "NL",
    },
  ],
  info: { seed: "1a73616b8106c81c", results: 1, page: 1, version: "1.4" },
};
