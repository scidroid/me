import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  props?: any;
  className?: string;
};

const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={`border text-lg font-medium rounded-xl text-center p-2 my-2 w-full hover:bg-slate-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
