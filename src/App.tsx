import type { RouteComponentProps } from "@reach/router";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { Copyright } from "@/shared/Copyright";
import { NewTodoTextInput } from "@/shared/NewTodoTextInput/NewTodoTextInput";
import { TodoList } from "@/shared/TodoList/TodoList";
import { UnderBar } from "@/shared/UnderBar/UnderBar";

import { recoilState, LocalStorageKey } from "./dataStructure";
import type { AppState } from "./dataStructure";
import { Layout } from "./style";

type Routes = "/" | "/active" | "/completed";

type Props = {
  path: Routes;
};

const App: React.FC<Props & RouteComponentProps> = ({ path }) => {
  const appState = useRecoilValue<AppState>(recoilState);

  // if appState has changes, save it LocalStorage.
  useEffect((): void => {
    window.localStorage.setItem(
      LocalStorageKey.APP_STATE,
      JSON.stringify(appState) // convert JavaScript Object to string
    );
  }, [appState]);

  return (
    <Layout>
      <section className="todoapp">
        <NewTodoTextInput />
        {appState.todoList.length >= 1 && (
          <>
            <TodoList path={path} />
            <UnderBar path={path} />
          </>
        )}
      </section>
      <Copyright />
    </Layout>
  );
};

export default App;
