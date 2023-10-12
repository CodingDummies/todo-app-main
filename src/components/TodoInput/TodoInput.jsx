import { useContext } from "react";
import { ActionContext } from "../../context";

const TodoInput = () => {
  const { addTodo } = useContext(ActionContext);

  const createTodo = (e) => {
    e.preventDefault();

    const todoInput = e.target.todoInput;
    const value = todoInput.value.trim();

    if (value.length === 0) return;

    addTodo({
      id: Date.now().toString(),
      text: value,
      active: false,
    });
    todoInput.value = null;
  };

  return (
    <form
      autoComplete="off"
      onSubmit={createTodo}
      className="flex w-full flex-row items-center gap-4 rounded-md bg-lt-vlg p-4 dark:bg-dt-vddb"
    >
      <button
        type="submit"
        className="h-6 w-[1.6rem] rounded-full border-2 border-lt-lgb p-[.3rem] dark:border-dt-vdgb-200"
      ></button>
      <input
        type="text"
        name="todoInput"
        placeholder="Create a new todo..."
        className="w-full bg-lt-vlg tracking-wider text-lt-vdgb placeholder-lt-dgb outline-none dark:bg-dt-vddb dark:text-dt-lgb dark:placeholder-dt-dgb"
      />
    </form>
  );
};

export default TodoInput;
