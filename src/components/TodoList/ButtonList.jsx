import { useContext } from "react";
import { ActionContext } from "../../context";

const ALL = "ALL";
const ACTIVE = "ACTIVE";
const COMPLETED = "COMPLETED";

const ButtonList = () => {
  const { getTodosLeft, clearCompleted, selected, changeFilter } =
    useContext(ActionContext);

  return (
    <li className="relative flex items-center justify-between px-5 py-4">
      <p className="text-lt-dgb dark:text-dt-vdgb-100">
        {getTodosLeft()} items left
      </p>
      <div className="absolute bottom-[-4rem] left-0 flex w-full items-center justify-center gap-4 rounded-md p-3 dark:bg-dt-vddb sm:static sm:w-fit sm:rounded-none">
        <button
          onClick={() => changeFilter(ALL)}
          className={`options ${selected === ALL && "active"}`}
        >
          All
        </button>
        <button
          onClick={() => changeFilter(ACTIVE)}
          className={`options ${selected === ACTIVE && "active"}`}
        >
          Active
        </button>
        <button
          onClick={() => changeFilter(COMPLETED)}
          className={`options ${selected === COMPLETED && "active"}`}
        >
          Completed
        </button>
      </div>
      <button
        onClick={clearCompleted}
        className={`text-lt-dgb hover:text-lt-vdgb dark:text-dt-vdgb-100 dark:hover:text-dt-lgbh ${
          selected !== ACTIVE && "active"
        }`}
      >
        Clear Completed
      </button>
    </li>
  );
};

export default ButtonList;
