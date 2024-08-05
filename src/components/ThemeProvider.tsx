"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { ReactElement, ReactNode, useEffect } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["theme"],
    queryFn: () => {
      return { theme: "light" };
    },
  });
  useEffect(() => {
    console.log("new", queryClient.getQueryData(["theme"]));
  }, [queryClient.getQueryData(["theme"])]);

  return (
    <div
      className={` w-full h-full ${
        data?.theme === "dark" ? "bg-[#000]" : "bg-[#fefefe]"
      } `}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
