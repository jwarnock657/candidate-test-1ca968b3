import { render, screen } from "@testing-library/react"
import React from "react"
import { CharacterList, filterCharacters, sortByAlphabetical, sortByIndex } from "./CharacterList"
import { Character } from "components/App";

jest.mock("components/CharacterComp/CharacterComp", () => ({
  CharacterComp: ({ character }: { character: Character }) => {
    return <div data-testid="CharacterComp" key={character.name}>{character.name}</div>;
  }
}))

const mockCharacters = [
  {
    name: "Jack",
    category: "category1",
    description: "This is a descriptions. It goes on for a while.",
    significanceIndex: 1,
    avatar: "imageUrl"
  },
  {
    name: "Jacob",
    category: "category1",
    description: "This is a descriptions. It goes on for a while.",
    significanceIndex: 4,
    avatar: "imageUrl"
  },
  {
    name: "John",
    category: "category2",
    description: "This is a descriptions. It goes on for a while.",
    significanceIndex: 2,
    avatar: "imageUrl"
  },
  {
    name: "Emma",
    category: "category2",
    description: "This is a descriptions. It goes on for a while.",
    significanceIndex: 3,
    avatar: "imageUrl"
  },
  {
    name: "Sinead",
    category: "category3",
    description: "This is a descriptions. It goes on for a while.",
    significanceIndex: 5,
    avatar: "imageUrl"
  }
]

describe("CharacterList", () => {
  it("Should Render Correctly", () => {
    render(<CharacterList characters={mockCharacters} filter="" order="Alphabetical" />);

    const characterComps = screen.getAllByTestId("CharacterComp");
    expect(characterComps.length).toBe(5);
  });

  it("Should filter Correctly", () => {
    render(<CharacterList characters={mockCharacters} filter="category1" order="Alphabetical" />);

    const characterComps = screen.getAllByTestId("CharacterComp");
    expect(characterComps.length).toBe(2);
  });

  describe("Sorting Tests", () => {
    it("Should sort correctly alphabetically", () => {
      const result = sortByAlphabetical(mockCharacters);
      expect(result).toEqual([{ "avatar": "imageUrl", "category": "category2", "description": "This is a descriptions. It goes on for a while.", "name": "Emma", "significanceIndex": 3 }, { "avatar": "imageUrl", "category": "category1", "description": "This is a descriptions. It goes on for a while.", "name": "Jack", "significanceIndex": 1 }, { "avatar": "imageUrl", "category": "category1", "description": "This is a descriptions. It goes on for a while.", "name": "Jacob", "significanceIndex": 4 }, { "avatar": "imageUrl", "category": "category2", "description": "This is a descriptions. It goes on for a while.", "name": "John", "significanceIndex": 2 }, { "avatar": "imageUrl", "category": "category3", "description": "This is a descriptions. It goes on for a while.", "name": "Sinead", "significanceIndex": 5 }]);
    })

    it("Should sort correctly by index", () => {
      const result = sortByIndex(mockCharacters);
      expect(result).toEqual([{ "avatar": "imageUrl", "category": "category1", "description": "This is a descriptions. It goes on for a while.", "name": "Jack", "significanceIndex": 1 }, { "avatar": "imageUrl", "category": "category2", "description": "This is a descriptions. It goes on for a while.", "name": "John", "significanceIndex": 2 }, { "avatar": "imageUrl", "category": "category2", "description": "This is a descriptions. It goes on for a while.", "name": "Emma", "significanceIndex": 3 }, { "avatar": "imageUrl", "category": "category1", "description": "This is a descriptions. It goes on for a while.", "name": "Jacob", "significanceIndex": 4 }, { "avatar": "imageUrl", "category": "category3", "description": "This is a descriptions. It goes on for a while.", "name": "Sinead", "significanceIndex": 5 }]);
    })
  })

  describe("Filtering Tests", () => {
    it("Should filter by category", () => {
      const result = filterCharacters(mockCharacters, "category1");
      expect(result).toEqual([{ "avatar": "imageUrl", "category": "category1", "description": "This is a descriptions. It goes on for a while.", "name": "Jack", "significanceIndex": 1 }, { "avatar": "imageUrl", "category": "category1", "description": "This is a descriptions. It goes on for a while.", "name": "Jacob", "significanceIndex": 4 }]);
    })
  })
})
