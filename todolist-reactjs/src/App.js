// import './App.css';
// import TaskList from '../src/Component/TaskList'

// function App() {
//   return (
//     <div className="App">
//       <TaskList />
//     </div>
//   );
// }

// export default App;
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todolist: ["An", "Ngu", "Code"],
      input: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleInput(event) {
    this.setState({
      input: event.target.value,
    });
  }

  addNewTodo() {
    if (this.state.input) {
      this.setState({
        todolist: [...this.state.todolist, this.state.input],
        input: "",
      });
    }
  }

  removeTodo(index) {
    this.setState({
      todolist: [
        ...this.state.todolist.slice(0, index),
        ...this.state.todolist.slice(index + 1),
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div>
          <input value={this.state.input} onChange={this.handleInput} />
          <button onClick={this.addNewTodo}>Add new</button>
        </div>
        {this.state.todolist.map((item, index) => (
          <div key={index}>
            {item}
            <button onClick={() => this.removeTodo(index)}>Remove</button>
          </div>
        ))}
      </div>
    );
  }
}
