import { useContext } from "react";
import check from "../../img/icon-check.svg";
import cross from "../../img/icon-cross.svg";
import { ActionContext } from "../../context";
import { Draggable } from "@hello-pangea/dnd";

const Todo = ({ todo, index }) => {
  const { toggleTodo, removeTodo } = useContext(ActionContext);

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="group flex items-center justify-between gap-4 border-b-2 border-lt-vlgb p-4 dark:border-dt-vdgb-100"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`list-toggle ${todo.active && "active"}`}
            >
              {todo.active && <img src={check} alt="" className="w-[.6rem]" />}
            </button>
            <p className={`todo-text ${todo.active && "active"}`}>
              {todo.text}
            </p>
          </div>
          <button
            onClick={() => removeTodo(todo.id)}
            className="group-hover:block lg:hidden"
          >
            <img src={cross} alt="Cross" />
          </button>
        </li>
      )}
    </Draggable>
  );
};

export default Todo;
