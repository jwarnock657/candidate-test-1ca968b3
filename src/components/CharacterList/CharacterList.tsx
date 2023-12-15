import { Character } from "components/App";
import { CharacterComp } from "components/CharacterComp/CharacterComp";
import React from "react";
import styles from "./CharacterList.module.scss";

interface CharacterListTypes {
  characters: Array<Character> | undefined;
  filter: string;
  order: string;
}

export const sortByAlphabetical = (characters: Array<Character>) => {
  return characters.sort((a, b) => a.name.localeCompare(b.name));
}

export const sortByIndex = (characters: Array<Character>) => {
  return characters.sort((a, b) => a.significanceIndex - b.significanceIndex);
}

export const filterCharacters = (characters: Array<Character>, filter: string) => {
  return characters.filter((character) => character.category === filter)
}

export const CharacterList = ({ characters, filter, order }: CharacterListTypes) => {

  if (!characters) {
    return;
  }

  let orderedCharacters = characters;

  if (order === "Alphabetical") {
    orderedCharacters = sortByAlphabetical(characters);
  } else {
    orderedCharacters = sortByIndex(characters);
  }

  if (filter) {
    orderedCharacters = filterCharacters(orderedCharacters, filter);
  }

  return <div className={styles.List}>
    {
      orderedCharacters && orderedCharacters.map((character) => <CharacterComp character={character} />)
    }
    {orderedCharacters && orderedCharacters.length % 2 !== 0 && <div className={styles.Block} />}
  </div>
}