import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["task 1", "task 2"],
      input: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.AddNew = this.AddNew.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleInput(event) {
    this.setState({
      input: event.target.value,
    });
  }

  AddNew() {
    if (this.state.input) {
      this.setState({
        tasks: [...this.state.tasks, this.state.input],
        input: "",
      });
    }
  }

  deleteTask(index) {
    console.log("delete");
    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, index),
        ...this.state.tasks.slice(index + 1),
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div className="add-tasks">
          <input
            value={this.state.input}
            onChange={this.handleInput}
            className="input"
          />
          <button onClick={this.AddNew} className="btn">
            Add
          </button>
        </div>
        <div className="tasks-list">
          {this.state.tasks.map((task, index) => (
            <div key={index} className="task-element">
              {task}
              <button
                onClick={() => this.deleteTask(index)}
                className="btn-del"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
