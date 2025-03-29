import { FC } from "react";

interface PencilIconProps {
  fill?: string;
  className?: string;
}

export const PencilIcon: FC<PencilIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path d="m13 0-2 2 3 3 2-2-3-3zM9 4l-7 7 3 3 7-7-3-3zm-8 8-1 4 4-1-3-3z" />
  </svg>
);
