import { DeleteTodoAction, FetchTodosAction } from "../actions/todos";

export enum ActionTypes {
	fetchTodos,
	deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
