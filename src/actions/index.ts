import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

interface Todo {
	id: number;
	title: string;
	complete: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodo = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<Todo[]>(url);
		dispatch({
			type: "FETCH_TODOS",
			payload: response,
		});
	};
};