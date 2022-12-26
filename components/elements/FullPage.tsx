import React from "react";

type Props = {
  children: React.ReactNode;
};

const FullPage: React.FC<Props> = ({ children }) => {
  return (
    <section className="animate__animated animate__fadeInUp min-h-96 w-full large:max-w-[76rem] rounded-xl bg-white m-4">
      {children}
    </section>
  );
};

export default FullPage;
