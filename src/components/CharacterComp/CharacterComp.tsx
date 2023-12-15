import { Character } from "components/App";
import React from "react";
import styles from "./CharacterComp.module.scss";

interface CharacterCompTypes {
  character: Character;
}

export const CharacterComp = ({ character }: CharacterCompTypes) => {
  return <div className={styles.Container}>
    <div className={styles.ContainerHeader}>
      <img className={styles.Avatar} src={`/characters/${character.avatar}`} alt={`${character.name} avatar`} />
      <div className={styles.TextContainer}>
        <strong>{character.name}</strong>
        <br />
        <div>{character.category[0].toUpperCase() + character.category.slice(1).toLowerCase()}</div>
      </div>
    </div>
    <div className={styles.Description}>
      {character.description}
    </div>
  </div>
}