import { FC } from "react";
import { Modal } from "react-overlays";

import { TaskForm } from "./TaskForm";
import { XThinIcon } from "./icons/XThinIcon";
import type { Task } from "../types";
import { Backdrop } from "./Backdrop";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  editTask: (formData: FormData) => void;
  task?: Task;
}

export const TaskModal: FC<TaskModalProps> = ({
  isOpen,
  onClose,
  task,
  editTask,
}) => {
  return (
    <Modal
      renderBackdrop={(props) => <Backdrop {...props} />}
      show={isOpen}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="relative w-xs sm:w-[500px] max-h-[calc(100vh - 40px)] overflow-y-auto outline-none bg-white shadow-[0_4px_16px_var(--shadow-modal-color)]">
        <div className="h-5 p-5 text-left">
          <h2 className="font-semibold inline">Edit task</h2>
          <span className="float-right cursor-pointer">
            <XThinIcon onClick={onClose} />
          </span>
        </div>
        <div className="p-5 text-left">
          <TaskForm action={editTask} onSubmitName="Edit task" task={task} />
        </div>
      </div>
    </Modal>
  );
};
