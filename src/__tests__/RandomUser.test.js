import { fireEvent, render, screen } from "@testing-library/react";

import { RandomUser } from "components/RandomUser/RandomUser";

describe("<RandomUser/>", () => {
  it("loads a user", async () => {
    render(<RandomUser />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const image = await screen.findByRole("img");
    const titleEl = await screen.findByRole("heading", { level: 1 });
    expect(image.getAttribute("alt")).toBe(titleEl.textContent);
  });
});
