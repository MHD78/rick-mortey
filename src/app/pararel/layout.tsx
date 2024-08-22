import React, { FC, ReactNode } from "react";

type component = {
  team: ReactNode;
  salary: ReactNode;
};

const layout: FC<component> = ({ team, salary }) => {
  return (
    <div>
      pararel layout
      {team}
      {salary}
    </div>
  );
};

export default layout;
