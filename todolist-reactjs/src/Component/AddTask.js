import React from "react";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskItem: "",
    };

    this.handleInput = this.handleInput.bind(this); // de this trong handleInput hieu this o dong 22 la AddTask
  }

  handleInput(event) {
    console.log(event.target.value); // lay gia tri cua input khi onchange dc goi
    this.setState({ taskItem: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Add New Task</h2>
        <input
          type="text"
          placeholder="Add new task..."
          value={this.state.taskItem}
          onChange={this.handleInput}
        />
        <button
          onClick={() => {
            this.props.addToList(this.state.taskItem);
            this.setState({ taskItem: "" });
          }}
        >
          Add Task
        </button>
      </div>
    );
  }
}

export default AddTask;
