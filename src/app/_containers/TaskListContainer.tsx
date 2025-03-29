import { getTasks, deleteTask, editTask } from "../_actions";
import { TaskList } from "../_components/TaskList";

export const TaskListContainer = async () => {
  const tasks = await getTasks();

  return (
    <TaskList
      tasks={tasks}
      editTaskAction={editTask}
      deleteTaskAction={deleteTask}
    />
  );
};
