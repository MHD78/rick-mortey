import React from "react";
import CharacterCard from "@/components/CharacterCard";
import { character } from "../../models/character";
import LoadMoreCharacters from "@/components/LoadMoreCharacters";

const getData = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=1`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
};

const Characters = async () => {
  const chars: character[] = await getData();

  return (
    <div className=" w-full max-w-[1440px] mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 px-10">
      {chars.map((char: character, index: number) => (
        <CharacterCard
          key={char.id}
          id={char.id}
          image={char.image}
          name={char.name}
          status={char.status}
          gender={char.gender}
        />
      ))}
      <LoadMoreCharacters />
    </div>
  );
};

export default Characters;
