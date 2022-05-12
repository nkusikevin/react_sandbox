import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
	todos: Todo[];
	fetchTodo(): any;
}

class _App extends React.Component<AppProps> {
	componentDidMount() {
		this.props.fetchTodo();
	}

	render() {
		console.log(this.props.todos);

		return <div>Hello</div>;
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos };
};

export const App = connect(mapStateToProps, { fetchTodo })(_App);
