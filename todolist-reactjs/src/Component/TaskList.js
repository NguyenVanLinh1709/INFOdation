import React from "react";
import TodoList from "./TodoList";
import AddTask from "./AddTask";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["Task 1", "Task 2"],
    };

    this.addToList = this.addToList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // them 1 item vao list
  addToList(item) {
    console.log(item);
    if (item.trim()) {
      this.setState({
        tasks: [...this.state.tasks, item],
      });
    }
  }

  deleteItem(index) {
    console.log(index);

    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, index),
        ...this.state.tasks.slice(index + 1),
      ],
    });
  }

  render() {
    return (
      <div className="container">
        <AddTask addToList={this.addToList} />
        <h2>List Task</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name of task</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map(
              function (name, index) {
                return (
                  <TodoList
                    key={index}
                    name={name}
                    deleteItem={() => this.deleteItem(index)}
                  />
                );
              }.bind(this)
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
