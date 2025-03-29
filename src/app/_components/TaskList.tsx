"use client";

import { FC } from "react";
import { Task } from "./Task";

import { TaskModal } from "./TaskModal";
import { Task as TaskType } from "../types";
import { useState } from "react";

interface TaskListProps {
  deleteTaskAction: (id: string) => Promise<{ message: string } | undefined>;
  editTaskAction: (task: TaskType) => Promise<{ message: string } | undefined>;
  tasks: TaskType[];
}

export const TaskList: FC<TaskListProps> = ({
  deleteTaskAction,
  editTaskAction,
  tasks,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskType | undefined>(
    undefined
  );

  const openEditModal = (task: TaskType) => {
    setIsModalOpen(true);
    setSelectedTask(task);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTask(undefined);
  };

  const editTask = (formData: FormData) => {
    const taskTitle = formData.get("title") as string;
    const taskDescription = formData.get("description") as string;

    if (
      selectedTask &&
      taskTitle === selectedTask.title &&
      taskDescription === selectedTask.description
    ) {
      closeModal();
      return;
    }

    editTaskAction({
      title: taskTitle,
      description: taskDescription,
      id: selectedTask?.id || "",
    });
    closeModal();
  };

  return (
    <div className="relative flex flex-row flex-wrap justify-center w-full px-2.5 pt-0 pb-5">
      <span className="absolute -top-5 font-semibold"></span>
      {tasks.map((item, index) => (
        <Task
          key={index}
          openEditModal={openEditModal}
          task={item}
          deleteTaskAction={deleteTaskAction}
        />
      ))}
      <TaskModal
        editTask={editTask}
        isOpen={isModalOpen}
        onClose={closeModal}
        task={selectedTask}
      />
    </div>
  );
};
