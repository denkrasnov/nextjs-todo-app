import { FC } from "react";

interface XThinIconProps {
  className?: string;
  onClick?: () => void;
  fill?: string;
}

export const XThinIcon: FC<XThinIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path d="M2 .594.594 2l.688.719L6.563 8l-5.281 5.281L.594 14 2 15.406l.719-.688L8 9.437l5.281 5.281.719.688L15.406 14l-.688-.719L9.437 8l5.281-5.281.688-.719L14 .594l-.719.688L8 6.563 2.719 1.282 2 .594z" />
  </svg>
);
