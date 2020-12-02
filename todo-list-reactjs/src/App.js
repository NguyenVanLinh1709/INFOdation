import React, { useState } from "react";
import "./App.css";

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: ["task 1", "task 2"],
//       input: "",
//     };

//     this.handleInput = this.handleInput.bind(this);
//     this.AddNew = this.AddNew.bind(this);
//     this.deleteTask = this.deleteTask.bind(this);
//   }

//   handleInput(event) {
//     this.setState({
//       input: event.target.value,
//     });
//   }

//   AddNew() {
//     if (this.state.input) {
//       this.setState({
//         tasks: [...this.state.tasks, this.state.input],
//         input: "",
//       });
//     }
//   }

//   deleteTask(index) {
//     console.log("delete");
//     this.setState({
//       tasks: [
//         ...this.state.tasks.slice(0, index),
//         ...this.state.tasks.slice(index + 1),
//       ],
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Todo List</h1>
//         <div className="add-tasks">
//           <input
//             value={this.state.input}
//             onChange={this.handleInput}
//             className="input"
//           />
//           <button onClick={this.AddNew} className="btn">
//             Add
//           </button>
//         </div>
//         <div className="tasks-list">
//           {this.state.tasks.map((task, index) => (
//             <div key={index} className="task-element">
//               {task}
//               <button
//                 onClick={() => this.deleteTask(index)}
//                 className="btn-del"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// ===========Function============
export default function App() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const AddNew = () => {
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="add-tasks">
        <input value={input} onChange={handleInput} className="input" />
        <button onClick={AddNew} className="btn">
          Add
        </button>
      </div>
      <div className="tasks-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-element">
            {task}
            <button onClick={() => deleteTask(index)} className="btn-del">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
