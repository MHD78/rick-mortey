import React from "react";
import { FaMale, FaFemale } from "react-icons/fa";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CharacterCardSkeleton = () => {
  return (
    <div className="flex  gap-3 h-fulll items-start w-full bg-gray-900 rounded-xl overflow-hidden ">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton width={180} height={190} />
        <div className="w-full flex flex-col gap-2 items-start h-full pt-2">
          <Skeleton width={120} />
          <span className={`flex items-center  gap-2`}>
            status:
            <Skeleton width={40} />
          </span>
          <span className={`flex items-center  gap-2`}>
            gender:
            <Skeleton width={40} />
          </span>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default CharacterCardSkeleton;
