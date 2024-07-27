import React from "react";
import CharacterCard from "@/components/CharacterCard";
interface character {
  image: string;
  name: string;
  status: string;
  gender: string;
}

const getData = async () => {
  const random = Math.random() * (10 - 1) + 1;
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${random}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data.results;
};

const Characters = async () => {
  const chars: character[] = await getData();

  return (
    <div className="w-full max-w-[1440px] mx-auto mt-10 grid grid-cols-3 gap-4">
      {chars.map((char: character, index: number) => (
        <CharacterCard
          key={index}
          image={char.image}
          name={char.name}
          status={char.status}
          gender={char.gender}
        />
      ))}
    </div>
  );
};

export default Characters;
