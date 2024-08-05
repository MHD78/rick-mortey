import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

const handleQueries = (name: string, value: string): string => {
  const params = new URLSearchParams();
  params.set(name, value);
  return params.toString();
};

const getData = async (name?: string) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=1&${name && "name=" + name}`
  );
  const data = await res.json();
  if (data.results) return data.results;
};

const HeaderSearchBox = () => {
  const searchParam = useSearchParams();
  const router = useRouter();

  return (
    <div>
      <TextField
        onChange={(e) =>
          // e.target.value.length >= 3 &&
          {
            router.replace(
              "/characters/search" + "?" + handleQueries("name", e.target.value)
            );
          }
        }
        // value={searchParam.get("name")}
        sx={{
          input: {
            color: "#fff",
            fontSize: 16,
            fontWeight: 300,
            paddingY: 2,
          },
          p: 0,
          bgcolor: "#374151",
          borderRadius: 2,
          outlineColor: "#fef645",
          color: "#3B82F6",
        }}
        defaultValue={searchParam.get("name")}
        InputProps={{
          startAdornment: (
            <InputAdornment sx={{ color: "#3B82F6" }} position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default HeaderSearchBox;
