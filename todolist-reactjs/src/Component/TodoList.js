import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.name}
          <button onClick={this.props.deleteItem}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default TodoList;
