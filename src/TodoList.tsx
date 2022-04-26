import type { ReactElement } from 'react'
import React from 'react'
import { useRecoilState } from 'recoil'

import type { AppState, Todo } from './dataStructure'
import { recoilState } from './dataStructure'

import { Item } from './Item'
import { Layout } from './todoList.style'

type Props = {
    path: '/' | '/active' | '/completed'
}

export const TodoList: React.FC<Props> = ({ path }) => {
    const [appState, setAppState] = useRecoilState<AppState>(recoilState)

    const toggleAllCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void  => {
        // reverse all todo.completed: boolean flag
        setAppState({ todoList: appState.todoList.map((t: Todo): Todo => ({ ...t, completed: e.target.checked })) })
    }

    console.log(path)

    return (
        <Layout>
            <section className="main">
                <input
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                    onChange={toggleAllCheckbox}
                />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {appState.todoList
                        .filter((t: Todo): boolean => {
                            switch (path) {
                                case '/':
                                    return true
                                case '/active':
                                    return t.completed === false
                                case '/completed':
                                    return t.completed === true
                                default:
                                    return true
                            }
                        })
                        .map((t: Todo): ReactElement => {
                            return <Item key={t.id} todo={t} />
                        })}
                </ul>
            </section>
        </Layout>
    )
}