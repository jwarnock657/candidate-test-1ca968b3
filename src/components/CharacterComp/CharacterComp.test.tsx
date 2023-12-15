import { render, screen } from "@testing-library/react"
import { CharacterComp } from "./CharacterComp"
import React from "react"

const mockCharacter = {
  name: "Jack",
  category: "category",
  description: "This is a descriptions. It goes on for a while.",
  significanceIndex: 1,
  avatar: "imageUrl"

}

describe("CharacterComp", () => {
  it("Should Render Correctly", () => {
    render(<CharacterComp character={mockCharacter} />);

    expect(screen.getByText(mockCharacter.name));
    expect(screen.getByText("Category"));
    expect(screen.getByText(mockCharacter.description));

    const image = screen.getByAltText("Jack avatar");
    expect(image).toHaveProperty("src", expect.stringContaining("characters/imageUrl"));
  })
})
