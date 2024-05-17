import { useState } from "react";
import "./App.css";
import TodoCard from "./components/TodoCard";

function App() {
  const initialState = []; //

  const [todoList, setTodoList] = useState(initialState);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    if (!newTitle || !newBody) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    setNewTitle("");
    setNewBody("");

    const newTodo = {
      id: Date.now(),
      title: newTitle,
      body: newBody,
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const toggleDone = (id) => {
    const updatedTodo = todoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodoList(updatedTodo);
  };

  const workingTodo = todoList.filter((todo) => !todo.isDone);

  const doneTodo = todoList.filter((todo) => todo.isDone);

  return (
    <>
      <h1>TODO</h1>

      <div>
        <form onSubmit={addTodo}>
          제목
          <input
            className="title"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          내용
          <input
            className="title"
            type="text"
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
          />
          <button className="add" type="submit">
            추가
          </button>
        </form>
        <h2>Working </h2>
        <TodoCard
          todos={workingTodo}
          toggleDone={toggleDone}
          removeTodo={removeTodo}
        />

        <h2>Done</h2>
        <TodoCard
          todos={doneTodo}
          toggleDone={toggleDone}
          removeTodo={removeTodo}
        />
      </div>
    </>
  );
}

export default App;
