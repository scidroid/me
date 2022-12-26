import React from "react";

type Props = {
  children: React.ReactNode;
};

const Simple: React.FC<Props> = ({ children }) => {
  return (
    <section className="animate-fade-in-up min-h-96 w-full m-4 p-12 rounded-xl large:max-w-sm bg-white hover:shadow-xl transition-shadow">
      {children}
    </section>
  );
};

export default Simple;
