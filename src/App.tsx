import type { RouteComponentProps } from '@reach/router'
import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import type { AppState } from './dataStructure'
import { recoilState, LocalStorageKey } from './dataStructure'

import { NewTodoTextInput } from './NewTodoTextInput'
import { UnderBar } from './UnderBar'
import { TodoList } from './TodoList'
import { Layout } from './style'
import { Copyright } from './Copyright'

type Routes = '/' | '/active' | '/completed'

type Props = {
    path: Routes
}

const App: React.FC<Props & RouteComponentProps> = ({ path }) => {
    const appState = useRecoilValue<AppState>(recoilState)

    // if appState has changes, save it LocalStorage.
    useEffect((): void => {
        window.localStorage.setItem(
            LocalStorageKey.APP_STATE,
            JSON.stringify(appState) // convert JavaScript Object to string
        )
    }, [appState])

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
    )
}

export default App