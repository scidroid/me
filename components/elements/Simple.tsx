import React from "react";

type Props = {
  children: React.ReactNode;
};

const Simple: React.FC<Props> = ({ children }) => {
  return (
    <section
      className={`animate__animated animate__fadeInUp min-h-96 w-full m-4 p-12 rounded-xl large:max-w-sm bg-white`}
    >
      {children}
    </section>
  );
};

export default Simple;
