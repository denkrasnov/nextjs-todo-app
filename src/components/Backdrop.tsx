import { FC, RefCallback, SyntheticEvent } from "react";
import type { RenderModalBackdropProps } from "react-overlays/cjs/Modal";

interface BackdropProps {
  ref: RefCallback<Element>;
  onClick: (event: SyntheticEvent) => void;
}

export const Backdrop: FC<BackdropProps> = (
  props: RenderModalBackdropProps
) => {
  return (
    <div {...props} className="fixed inset-0 bg-(--backdrop-color) z-[1040]" />
  );
};
