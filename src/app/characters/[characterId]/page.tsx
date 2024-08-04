import { character as Icharacter } from "@/models/character";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
  const characters = await res.json();

  const params = characters.results.map((character: Icharacter) => ({
    characterId: String(character.id),
  }));
  return params;
}

export default async function Page({
  params,
}: {
  params: { characterId: string };
}) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.characterId}`
  );
  if (!res.ok) notFound();
  const data = await res.json();
  const characterInfo: Icharacter = data;
  const time = new Date();

  return (
    <div>
      {characterInfo.name},{JSON.stringify(time)}
    </div>
  );
}
