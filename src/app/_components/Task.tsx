import { FC } from "react";

import { PencilIcon } from "./icons/PencilIcon";
import { TrashIcon } from "./icons/TrashIcon";
import type { Task as TaskType } from "../types";

interface TaskProps {
  task: TaskType;
  openEditModal: (task: TaskType) => void;
  deleteTaskAction: (id: string) => void;
  clearError?: () => void;
}

export const Task: FC<TaskProps> = ({
  task,
  openEditModal,
  deleteTaskAction,
}) => {
  const onEdit = () => {
    openEditModal(task);
  };

  const onDelete = () => {
    deleteTaskAction(task.id);
  };

  return (
    <div className="bg-white shadow-[0_1px_5px_var(--shadow-color)] m-2.5">
      <section className="flex flex-col pt-2 px-5  w-[300px] h-[210px]">
        <h4 className="mb-2.5 break-words font-bold">{task.title}</h4>
        <p className="m-0 overflow-hidden break-words">{task.description}</p>
      </section>
      <div className="flex flex-row-reverse p-2.5 bg-white border-t border-t-(--border-color) border-dashed">
        <button
          className="group inline-block p-1 border-0 outline-0 ml-2.5"
          onClick={onDelete}
          type="button"
        >
          <TrashIcon
            className={`block fill-(--icon-color) group-hover:fill-(--icon-hover-color)`}
          />
        </button>
        <button
          className="group inline-block p-1 border-0 outline-0 ml-2.5"
          onClick={onEdit}
          type="button"
        >
          <PencilIcon
            className={`block fill-(--icon-color) group-hover:fill-(--icon-hover-color)`}
          />
        </button>
      </div>
    </div>
  );
};
