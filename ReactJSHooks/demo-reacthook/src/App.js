import { useEffect, useState } from 'react';
import './App.scss';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: 'I love easy FE' },
  //   { id: 2, title: 'We love easy FE' },
  //   { id: 3, title: 'They love easy FE' }
  // ]);

  // function handleTodoClick(todo) {
  //   const index = todoList.findIndex(x => x.id === todo.id);
  //   if (index < 0) {
  //     return
  //   }
  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }

  // return (
  //   <div className="app">
  //     <h1>React Hooks</h1>
  //     <TodoList todos={todoList} onTodoClick={handleTodoClick} />
  //   </div>
  // );

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log('Failed to fetch: ', error.message);
      }
    }
    console.log('Post list');
    fetchPostList()
  }, []); // once time

  useEffect(() => {
    console.log('Todo list');
  })

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love easy FE' },
    { id: 2, title: 'We love easy FE' },
    { id: 3, title: 'They love easy FE' }
  ])

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0) {
      return
    }
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: Math.random() * 10,
      ...formValues
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList)
  }

  return (
    <div>
      <h1>Post List</h1>

      <PostList posts={postList} />

      {/* <h1>TodoList</h1> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
    </div>
  )
}

export default App;
