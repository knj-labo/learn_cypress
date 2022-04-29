import React from "react";
import { useRecoilState } from "recoil";

import type { AppState, Todo } from "@/dataStructure";
import { recoilState } from "@/dataStructure";
import { FilterLink } from "@/shared/FilterLink";

import { Layout } from "./underBar.style";

type Props = {
  path: "/" | "/active" | "/completed";
};

export const UnderBar: React.FC<Props> = ({ path }) => {
  const [appState, setAppState] = useRecoilState<AppState>(recoilState);
  const doneCount: number = appState.todoList.filter(
    (t) => t.completed === true
  ).length;
  const yetCount: number = appState.todoList.filter(
    (t) => t.completed === false
  ).length;

  const clearCompleted = (): void => {
    setAppState({
      todoList: appState.todoList.filter((t: Todo) => !t.completed),
    });
  };

  return (
    <Layout>
      <footer className="footer">
        <span className="todo-count">
          <strong data-cy="remaining-uncompleted-todo-count">{yetCount}</strong>
          item left
        </span>
        <FilterLink path={path} />
        {doneCount > 0 && (
          <button onClick={clearCompleted} className="clear-completed">
            Clear completed
          </button>
        )}
      </footer>
    </Layout>
  );
};
