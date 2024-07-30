import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Loading = () => {
  const loadingArray = [...Array(20)].fill(1);
  return (
    <div className="mx-auto mt-10 grid grid-cols-3 gap-4 max-w-[1440px] h-fulll w-full  ">
      {loadingArray.map((li, index) => (
        <div
          key={index}
          className="flex items-start gap-4 bg-gray-700 rounded-xl overflow-hidden"
        >
          <SkeletonTheme baseColor="#C0C0C0" highlightColor="#808080">
            <Skeleton width={180} height={180} />
            <div className="w-full flex flex-col gap-2 items-start h-full pt-2">
              <Skeleton width={120} height={20} />
              <span className={`flex items-center  gap-2`}>
                status:
                <Skeleton />
              </span>
              <span className={`flex items-center  gap-2`}>
                gender:
                <Skeleton />
              </span>
            </div>
          </SkeletonTheme>
        </div>
      ))}
    </div>
  );
};

export default Loading;
