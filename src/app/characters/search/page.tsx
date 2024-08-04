"use client";

import CharacterCard from "@/components/CharacterCard";
import LoadMoreCharacters from "@/components/LoadMoreCharacters";
import { character } from "@/models/character";
import { notFound, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [chars, setChars] = useState<character[]>([]);
  const params = useSearchParams();

  useEffect(() => {
    const getData = async (name?: string) => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=1&${
          name && "name=" + name
        }`
      );
      const data = await res.json();
      if (data.results) setChars(data.results);
      else notFound();
    };
    getData(String(params.get("name")));
  }, [params.get("name")]);

  return (
    <div className="w-full max-w-[1440px] mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 px-10">
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

export default Search;
