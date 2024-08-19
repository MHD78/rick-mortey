"use client";

import useTheme from "@/store/useTheme";

import React, { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div
      className={` w-full h-full ${
        theme === "dark" ? "bg-[#000]" : "bg-[#fefefe]"
      } `}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
