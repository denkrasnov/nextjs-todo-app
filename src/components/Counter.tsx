import { FC } from "react";

interface CounterProps {
  valueLength: number;
  maxLength: number;
}

export const Counter: FC<CounterProps> = ({ valueLength, maxLength }) => {
  return (
    <span
      className={`float-right ${
        valueLength >= maxLength
          ? "text-(--error-color)"
          : "text-(--border-dark-color)"
      }`}
    >
      {valueLength}/{maxLength}
    </span>
  );
};
