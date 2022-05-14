import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
	id: number;
	title: string;
	complete: boolean;
}

export interface FetchTodosAction {
	type: ActionTypes.fetchTodos;
	payload: Todo[];
}

export interface DeleteTodoAction {
	type: ActionTypes.deleteTodo;
	payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodo = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<Todo[]>(url);

		dispatch<FetchTodosAction>({
			type: ActionTypes.fetchTodos,
			payload: response.data,
		});
	};
};

export const deleteTodo = (id: number) => {
	return async (dispatch: Dispatch) => {
		dispatch<DeleteTodoAction>({
			type: ActionTypes.deleteTodo,
			payload: id,
		});
	};
};
