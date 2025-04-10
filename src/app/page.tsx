import { TaskForm } from "../components/TaskForm";
import { crateTask, getTasks, editTask, deleteTask } from "../actions";

import { TaskList } from "../components/TaskList";

const Home = async () => {
  const tasks = await getTasks();

  return (
    <div className="flex flex-col items-center min-h-screen bg-(--main-color)">
      <header className="pt-2.5 w-full text-center bg-white">
        <h1 className="font-bold text-[34px]">Todo tasks</h1>
      </header>
      <div className="w-4/5 h-px mb-7 bg-(--border-color)" />
      <main className="flex flex-col items-center min-h-screen w-full">
        <div className="w-4/5 max-w-[550px] min-w-[300px] bg-white p-5 mb-[45px] shadow-[0_1px_5px_var(--shadow-color)]">
          <TaskForm
            action={crateTask}
            headerName="Create task"
            onSubmitName="Create task"
          />
        </div>
        <TaskList
          tasks={tasks}
          editTaskAction={editTask}
          deleteTaskAction={deleteTask}
        />
      </main>
    </div>
  );
};

export default Home;
