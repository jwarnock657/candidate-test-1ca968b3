import React, { useEffect, useState } from "react";
import { CharacterList } from "./CharacterList/CharacterList";
import { Filter } from "./Filter/Filter";
import { Character } from "./App";
import styles from "./index.module.scss";


const Content = () => {
  const [characters, setCharacters] = useState<Array<Character>>();
  const [filter, setFilter] = useState<string>("");
  const [order, setOrder] = useState<string>("Alphabetical");

  async function getCharacters() {
    const result = await fetch(`/characters.json`)
      .then((resp) => resp.json());

    setCharacters(result);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return <>
    <div className={styles.FilterRow}>
      <Filter title="Category" options={["", ... new Set(characters?.map((character => character.category)))]} value={filter} setValue={setFilter} />
      <Filter title="Order By" options={["Alphabetical", "Significance Index"]} value={order} setValue={setOrder} />
    </div>
    <CharacterList characters={characters} filter={filter} order={order} />
  </>;
}

export default Content;