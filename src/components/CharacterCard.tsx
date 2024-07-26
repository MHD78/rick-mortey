import React from "react";
import { FaMale, FaFemale } from "react-icons/fa";

interface IProps {
  image: string;
  name: string;
  status: string;
  gender: string;
}

const CharacterCard = ({ image, name, status, gender }: IProps) => {
  return (
    <div className="flex  gap-3 h-fulll w-full bg-gray-700 rounded-xl overflow-hidden ">
      <img src={image} alt={name} className="w-[180px]" />
      <div className="w-full flex flex-col gap-2 items-start h-full pt-2">
        <h2 className="font-bold text-2xl ">{name}</h2>
        <span className={`flex items-center  gap-2`}>
          status:
          <span
            className={` flex items-center gap-1 text-sm before:block before:rounded-full before:w-3 before:h-3 ${
              status === "dead"
                ? "before:bg-red-400"
                : status === "unknown"
                ? "before:bg-yellow-400"
                : "before:bg-green-400"
            }`}
          >
            {status}
          </span>
        </span>
        <span className={`flex items-center  gap-2`}>
          gender:
          <span className="flex items-center">
            {gender === "Male" ? <FaMale /> : <FaFemale />}

            {gender}
          </span>
        </span>
      </div>
    </div>
  );
};

export default CharacterCard;
