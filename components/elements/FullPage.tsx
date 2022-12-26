import React from "react";

type Props = {
  children: React.ReactNode;
};

const FullPage: React.FC<Props> = ({ children }) => {
  return (
    <section className="animate-fade-in-up min-h-96 w-full large:max-w-[76rem] rounded-xl bg-white m-4 hover:shadow-xl transition-shadow">
      {children}
    </section>
  );
};

export default FullPage;
