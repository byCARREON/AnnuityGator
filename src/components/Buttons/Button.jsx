import React from "react";

const Button = ({ onClick, className, type, children }) => {
  return (
    <button onClick={onClick} className={`${className} py-2 uppercase font-bold rounded-sm`} type={type}>
      {children}
    </button>
  );
};

export default Button;
