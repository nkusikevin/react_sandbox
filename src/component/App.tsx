import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodo, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
	todos: Todo[];
	fetchTodo: Function;
	deleteTodo: typeof deleteTodo;
}

interface AppState {
	fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = { fetching: false };
	}

	componentDidUpdate(prevProps: AppProps): void {
		if (prevProps.todos !== this.props.todos) {
			this.setState({ fetching: false });
		}
	}

	onButtonClick = (): void => {
		this.props.fetchTodo();
		this.setState({ fetching: true });
	};

	onTodoClick = (id: number): void => {
		this.props.deleteTodo(id);
	};

	renderList(): JSX.Element[] {
		return this.props.todos.map((todo: Todo) => {
			return (
				<div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
					{todo.title}
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<button onClick={this.onButtonClick}>Fetch</button>
				{this.state.fetching ? "LOADING" : null}
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos };
};

export const App = connect(mapStateToProps, { fetchTodo, deleteTodo })(_App);
