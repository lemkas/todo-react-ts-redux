export interface ITodoState {
    todos: any[],
    loading: boolean,
    error: null | string
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR'
}

interface IFetchTodosAction {
    type: TodoActionTypes.FETCH_TODOS
}

interface IFetchTodosSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS,
    payload: any[]
}

interface IFetchTodosErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR,
    payload: string
}

export type TodoAction = IFetchTodosAction | IFetchTodosSuccessAction | IFetchTodosErrorAction
