import React from "react";

import Simple from "./elements/Simple";

type Props = {
  content: string;
};

const ThoughtSection: React.FC<Props> = ({ content }) => {
  return (
    <Simple>
      <div className="large:flex large:flex-col large:items-center large:justify-center h-full">
        <h2 className="text-center w-full mb-4 font-bold text-2xl">
          My thoughts
        </h2>
        <div className="flex flex-col items-center justify-center h-full pb-6 large:pb-0">
          <p className="text-center font-semibold text-4xl">{`"${content}"`}</p>
        </div>
      </div>
    </Simple>
  );
};

export default ThoughtSection;
