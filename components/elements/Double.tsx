import React from "react";

type Props = {
  children: React.ReactNode;
};

const Double: React.FC<Props> = ({ children }) => {
  return (
    <section className="animate-fade-in-up min-h-96 large:w-[50rem] w-full m-4 p-12 rounded-xl bg-white hover:shadow-xl transition-shadow">
      {children}
    </section>
  );
};

export default Double;
