"use client";

import { FC, useState, useRef, ChangeEvent } from "react";
import { Button } from "./Button";
import { Notification } from "./Notification";
import { Counter } from "./Counter";
import type { Task } from "../app/types";
import { errorMessages } from "./constants";

interface TaskFormProps {
  action: (formData: FormData) => void;
  headerName?: string;
  task?: Task;
  onSubmitName: string;
}

const TITLE_MAX_LENGTH = 40;
const DESCRIPTION_MAX_LENGTH = 300;

export const TaskForm: FC<TaskFormProps> = ({
  action,
  headerName = "",
  task,
  onSubmitName,
}) => {
  const ref = useRef<HTMLFormElement>(null);
  const [taskTitle, setTaskTitle] = useState(task?.title || "");
  const [taskDescription, setTaskDescription] = useState(
    task?.description || ""
  );
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTaskTitle(value);
  };

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTaskDescription(value);
  };

  const validate = (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    const cleanTitle = title.trim();
    const cleanDescription = description.trim();

    if (cleanTitle === "" && cleanDescription === "") {
      setErrorMessage(errorMessages.emptyFields);
      return false;
    }

    return true;
  };

  const hideNotification = () => {
    setErrorMessage("");
  };

  const clearState = () => {
    hideNotification();
    setTaskDescription("");
    setTaskTitle("");
  };

  return (
    <div className="flex flex-col">
      {headerName ? (
        <div className="pb-5.5">
          <h2 className="inline font-semibold">{headerName}</h2>
        </div>
      ) : null}

      {errorMessage ? (
        <Notification onDismiss={hideNotification} type="error">
          {errorMessage}
        </Notification>
      ) : null}

      <form
        acceptCharset="utf-8"
        action={async (formData) => {
          if (validate(formData)) {
            await action(formData);
            ref?.current?.reset();
            clearState();
          }
        }}
        ref={ref}
      >
        <label className="block mb-2.5 font-semibold">
          <Counter
            maxLength={TITLE_MAX_LENGTH}
            valueLength={taskTitle.length}
          />
          Title:
          <input
            className="block w-full min-h-10.5 py-2.5 px-4 mt-2.5 border border-(--border-color) outline-0 bg-white text-(--input-text-color) focus:border-(--border-dark-color)"
            maxLength={TITLE_MAX_LENGTH}
            name="title"
            onChange={onChangeTitle}
            type="text"
          />
        </label>
        <label className="block mb-2.5 font-semibold">
          <Counter maxLength={300} valueLength={taskDescription.length} />
          Description:
          <textarea
            className="block w-full min-h-10.5 py-2.5 px-4 mt-2.5 border border-(--border-color) outline-0 bg-white text-(--input-text-color) focus:border-(--border-dark-color) resize-y"
            maxLength={DESCRIPTION_MAX_LENGTH}
            name="description"
            onChange={onChangeDescription}
            rows={3}
          />
        </label>
        <Button>{onSubmitName}</Button>
      </form>
    </div>
  );
};
