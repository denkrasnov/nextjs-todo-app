import { FC } from "react";

interface TrashIconProps {
  className?: string;
}

export const TrashIcon: FC<TrashIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path d="M5.75 0A.757.757 0 0 0 5 .75V2H2a2 2 0 0 0-2 2h15a2 2 0 0 0-2-2h-3V.75A.757.757 0 0 0 9.25 0h-3.5zM6 1h3v1H6V1zM2 5v10.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V5h-2v8.5a.5.5 0 0 1-1 0V5H8v8.5a.5.5 0 0 1-1 0V5H5v8.5a.5.5 0 0 1-1 0V5H2z" />
  </svg>
);
