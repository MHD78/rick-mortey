"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <nav className=" max-w-[1440px] mx-auto mt-4 rounded-lg py-6 px-8 flex items-center gap-8 w-full bg-[#fff]/10  backdrop-blur-md">
        <Link
          href={"/characters"}
          className={`${
            pathname === "/characters"
              ? "text-blue-500 font-bold"
              : "text-white font-semibold "
          }  text-xl  `}
        >
          Characters
        </Link>
        <Link
          href={"/locations"}
          className={`${
            pathname === "/locations"
              ? "text-blue-500 font-bold"
              : "text-white font-semibold "
          }  text-xl  `}
        >
          Locations
        </Link>
      </nav>
    </>
  );
};

export default Header;
