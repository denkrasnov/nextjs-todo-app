import { FC, ReactNode } from "react";

import { XThinIcon } from "./icons/XThinIcon";

interface NotificationProps {
  children: ReactNode;
  type: "success" | "error";
  onDismiss: () => void;
}

export const Notification: FC<NotificationProps> = ({
  type,
  onDismiss,
  children,
}) => {
  return (
    <div
      className={`flex self-center items-center justify-center min-w-1/2 px-5.5 py-4 rounded-sm text-white ${
        type === "error" ? "bg-(--error-color)" : "bg-(--success-color)"
      }`}
    >
      {children}
      {onDismiss ? (
        <div className="ml-4 text-center cursor-pointer">
          <XThinIcon fill="white" onClick={onDismiss} />
        </div>
      ) : null}
    </div>
  );
};
