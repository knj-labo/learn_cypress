import type { RecoilState } from 'recoil'
import { atom } from 'recoil'

export type Todo = {
    id: string
    bodyText: string
    completed: boolean
}

export type TodoListType = Todo[]

export type AppState = {
    todoList: TodoListType
}

export enum LocalStorageKey {
    APP_STATE = 'APP_STATE',
}

const LoadAppStateFromLocalStorage = (): AppState => {
    const stringifiedJSON: string | null = window.localStorage.getItem(
        LocalStorageKey.APP_STATE
    )
    if (typeof stringifiedJSON === 'string') {
        const Loaded: AppState = JSON.parse(stringifiedJSON)
        return Loaded
    }

    const BlankAppState: AppState = {
        todoList: [],
    }

    return BlankAppState
}

export const recoilState: RecoilState<AppState> = atom({
    key: 'initialAppState',
    default: LoadAppStateFromLocalStorage(),
})