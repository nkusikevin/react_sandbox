import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
	todos: Todo[];
	fetchTodo(): any;
}

class _App extends React.Component<AppProps> {
	onButtonClick = (): void => {
		this.props.fetchTodo();
	};

	renderList(): JSX.Element[] {
		return this.props.todos.map((todo: Todo) => {
			return <div key={todo.id}>{todo.title}</div>;
		});
	}
	render() {
		console.log(this.props.todos);
		return (
			<div>
				<button onClick={this.onButtonClick}>Fetch</button>
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos };
};

export const App = connect(mapStateToProps, { fetchTodo })(_App);
