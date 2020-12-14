import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import EdiText from "react-editext";
import styled from "styled-components";

import "./index.css";

const StyledEdiText = styled(EdiText)`
  button {
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: rgb(70, 70, 70);
    color: rgb(185, 185, 185);
  }
`;

var defaultState = {
  todo: {
    items: [],
  },
};

// Add the actions here
function addTodo(message) {
  return {
    type: "ADD_TODO",
    message: message,
  };
}

function deleteTodo(index) {
  return {
    type: "DELETE_TODO",
    index: index,
  };
}

// Create reducer
function todoApp(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      var newState = Object.assign({}, state);

      newState.todo.items.push({
        message: action.message,
      });

      return newState;
    }

    case "DELETE_TODO": {
      var items = [].concat(state.todo.items);

      items.splice(action.index, 1);

      return Object.assign({}, state, {
        todo: {
          items: items,
        },
      });
    }

    default:
      return state;
  }
}

//create Store
var store = createStore(todoApp, defaultState);

function AddTodoForm() {
  const [message, setMessage] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (message !== "") {
      store.dispatch(addTodo(message));
      setMessage("");
    }
  };

  const onMessageChanged = (e) => {
    var message = e.target.value;
    setMessage(message);
  };

  return (
    <form onSubmit={onFormSubmit} className="add-to-form">
      <input
        type="text"
        placeholder="Add here..."
        onChange={onMessageChanged}
        value={message}
        className="input-text"
      />
      <button onSubmit={onFormSubmit} type="submit" className="btn-submit">
        Add
      </button>
    </form>
  );
}

function TodoItem(props) {
  const onSave = (val) => {
    console.log("Edited value: ", val);
  };

  const onDeleteClick = (index) => {
    store.dispatch(deleteTodo(index));
  };

  return (
    <li className="todolist">
      <StyledEdiText
        type="text"
        href="#"
        className="todo-item"
        onSave={onSave}
        value={props.message.trim()}
      />
      <button href="#" onClick={onDeleteClick} className="del-btn">
        Delete
      </button>
    </li>
  );
}

class TodoList extends React.Component {
  state = {
    items: [],
  };

  componentWillMount() {
    store.subscribe(() => {
      var state = store.getState();
      this.setState({
        items: state.todo.items,
      });
    });
  }
  render() {
    var items = [];

    this.state.items.forEach((item, index) => {
      items.push(
        <TodoItem
          key={index}
          index={index}
          message={item.message}
          style={{
            paddingTop: 10,
          }}
        />
      );
    });

    if (!items.length) {
      return (
        <p className="todolist">
          <i>Nothing todo.</i>
        </p>
      );
    }

    return <ol>{items}</ol>;
  }
}

ReactDOM.render(
  <div className="app">
    <div className="container">
      <h1>Todo List With Redux</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  </div>,
  document.getElementById("root")
);
