"use server";
import { promises as fs } from "fs";
import { revalidatePath } from "next/cache";
import type { Task } from "../types";

interface TasksData {
  tasks: Task[];
}

const generateID = () => {
  return `_${Math.random().toString(36).substring(2, 9)}`;
};

export const crateTask = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  const cleanTitle = title.trim();
  const cleanDescription = description.trim();

  if (cleanTitle === "" && cleanDescription === "") {
    return { message: `Error: the fields are required` };
  }

  const file = await fs.readFile(process.cwd() + "/tasks.json", "utf8");
  const data = JSON.parse(file);

  const task = {
    id: generateID(),
    title: cleanTitle,
    description,
  };
  data.tasks.push(task);

  await fs.writeFile(process.cwd() + "/tasks.json", JSON.stringify(data));

  revalidatePath("/");

  return { message: "Successfully created task" };
};

export const getTasks = async (): Promise<Task[]> => {
  const file = await fs.readFile(process.cwd() + "/tasks.json", "utf8");
  const data = JSON.parse(file);

  return data.tasks;
};

export const deleteTask = async (id: string) => {
  if (id) {
    const file = await fs.readFile(process.cwd() + "/tasks.json", "utf8");
    const data: TasksData = JSON.parse(file);
    const taskIndex = data.tasks.findIndex((item) => item.id === id);
    if (taskIndex !== null) {
      data.tasks.splice(taskIndex, 1);
      await fs.writeFile(process.cwd() + "/tasks.json", JSON.stringify(data));

      revalidatePath("/");

      return { message: "Successfully deleted task" };
    }
  }
};

export const editTask = async (task: Task) => {
  const { id, title, description } = task;

  if (!title && !description) {
    return {
      message: "Please complete at least one of the fields",
    };
  }

  if (title.length > 40) {
    return {
      message: "Amount of characters for field 'title' is more than 40",
    };
  }

  if (description.length > 300) {
    return {
      message: "Amount of characters for field 'description' is more than 300",
    };
  }

  if (id) {
    const file = await fs.readFile(process.cwd() + "/tasks.json", "utf8");
    const data: TasksData = JSON.parse(file);

    const task = data.tasks.find((item) => item.id === id);

    if (task != null) {
      task.title = title;
      task.description = description;
      await fs.writeFile(process.cwd() + "/tasks.json", JSON.stringify(data));

      revalidatePath("/");

      return { message: "Task updated" };
    }

    return { message: "Not found" };
  }

  return { message: "Bad request" };
};
