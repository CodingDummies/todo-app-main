import Todo from "./Todo";
import ButtonList from "./ButtonList";

import "./TodoList.css";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useContext } from "react";
import { ActionContext } from "../../context";

const TodoList = ({ todos }) => {
  const { onDragEnd } = useContext(ActionContext);

  const handleOnDrag = (e) => {
    if (e.destination === null) return;
    const source = e.source.index;
    const destination = e.destination.index;
    onDragEnd(source, destination);
  };

  return (
    <DragDropContext onDragEnd={handleOnDrag}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="mt-4 w-full rounded-md bg-lt-vlg shadow-custom dark:bg-dt-vddb"
          >
            {todos.map((todo, index) => (
              <Todo key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
            <ButtonList />
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
