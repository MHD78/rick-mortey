import React from "react";
import { revalidateTag } from "next/cache";
import CharacterCard from "@/components/CharacterCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CharacterCardSkeleton from "@/components/CharacterCardSkeleton";
import _ from "lodash";

interface character {
  image: string;
  name: string;
  status: string;
  gender: string;
}

const test = [...Array(10)].fill(1);
console.log(test);

const getData = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character", {
    cache: "no-store",
  });
  console.log({ res });
  const data = await res.json();
  return data.results;
};

const Characters = async () => {
  const chars: character[] = await getData();

  return (
    <div className="w-full max-w-[1440px] mx-auto mt-10 grid grid-cols-3 gap-4">
      {chars.length
        ? chars.map((char: character) => (
            <CharacterCard
              image={char.image}
              name={char.name}
              status={char.status}
              gender={char.gender}
            />
          ))
        : test.map((ts) => <CharacterCardSkeleton />)}
    </div>
  );
};

export default Characters;
