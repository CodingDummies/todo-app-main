import { useTheme, useTodos } from "./hooks";
import { ActionContext } from "./context";

import { TodoInput, TodoList } from "./components";

import sun from "./img/icon-sun.svg";
import moon from "./img/icon-moon.svg";

const App = () => {
  const [isDark, toggleTheme] = useTheme();
  const [todos, actions] = useTodos();

  return (
    <>
      <header className="mx-auto mb-4 flex w-[90%] max-w-lg items-center justify-between">
        <h1 className="text-2xl font-bold tracking-[.8rem] text-lt-vlg md:text-3xl">
          TODO
        </h1>
        <button onClick={() => toggleTheme(!isDark)} className="w-5">
          <img src={isDark ? sun : moon} alt="Toggle" />
        </button>
      </header>

      <main className="mx-auto w-[90%] max-w-lg pt-4">
        <ActionContext.Provider value={actions}>
          <TodoInput />
          <TodoList todos={todos} />
        </ActionContext.Provider>
      </main>

      <footer className="mb-4 mt-24 sm:mt-8">
        <p className="text-center text-lt-dgb dark:text-dt-vdgb-100">
          Drag and drop to reorder list
        </p>
      </footer>
    </>
  );
};

export default App;
