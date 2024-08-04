import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

const handleQueries = (name: string, value: string): string => {
  const params = new URLSearchParams();
  params.set(name, value);
  return params.toString();
};

const HeaderSearchBox = () => {
  const searchParam = useSearchParams();
  const pathname: string = usePathname();
  const router = useRouter();
  return (
    <div>
      <TextField
        onChange={(e) =>
          // e.target.value.length >= 3 &&
          router.replace(
            "/characters/search" + "?" + handleQueries("name", e.target.value)
          )
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
