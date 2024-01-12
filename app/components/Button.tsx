"use client";

import React from "react";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  custom,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
  disabled: opacity-70
  disabled: cursor-not-allowed
  rounded-md
  hover:opacity-80
  transition
  w-full
  border-slate-700
  flex
  items-center
  justify-center
  gap-2
  ${outline ? "bg-white" : "bg-slate-700"}
  ${outline ? "text-slate-700" : "text-white"}
  ${
    small ? "text-sm font-light border-[1px]" : "text-md font-semibold border-2"
  }
  ${small ? "py-1 px-2" : "py-3 px-4"}
  ${custom ? custom : ""}
  `}
    >
      {label}
    </button>
  );
};

export default Button;
