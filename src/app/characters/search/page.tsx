"use client";

import CharacterCard from "@/components/CharacterCard";
import LoadMoreCharacters from "@/components/LoadMoreCharacters";
import { character } from "@/models/character";
import { useQuery } from "@tanstack/react-query";
import { notFound, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const getData = async (name?: string) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=1&${name && "name=" + name}`
  );
  const data = await res.json();
  if (data.results) return data.results;
  else notFound();
};

const Search = () => {
  const params = useSearchParams();

  useEffect(() => {}, [params.get("name")]);

  const { data, isLoading } = useQuery({
    queryKey: ["search", params.get("name")],
    queryFn: () => getData(String(params.get("name"))),
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
  console.log(data);
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 px-10">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data.map((char: character, index: number) => (
            <CharacterCard
              key={char.id}
              id={char.id}
              image={char.image}
              name={char.name}
              status={char.status}
              gender={char.gender}
            />
          ))}
        </>
      )}
      <LoadMoreCharacters />
    </div>
  );
};

export default Search;
