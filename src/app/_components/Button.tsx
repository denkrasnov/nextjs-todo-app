import { useFormStatus } from "react-dom";
import { Spinner } from "./Spinner";

import { FC } from "react";

interface ButtonProps {
  children?: string;
  onClick?: () => void;

  type?: "submit" | "button";
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick = () => {},
  type = "submit",
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      className="block px-7.5 py-2.5 mx-auto mt-5 mb-0 rounded-sm outline-0 bg-(--button-primary-color) 
      font-semibold text-white select-none overflow-hidden hover:bg-(--button-hover-color) disabled:bg-(--icon-color) disabled:p-[9px_30px] min-w-34"
      disabled={pending}
      onClick={onClick}
      type={type}
    >
      {pending ? <Spinner /> : children}
    </button>
  );
};
