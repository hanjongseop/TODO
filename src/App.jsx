import { useState } from "react";
import "./App.css";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";

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

  const titleValue = (e) => {
    setNewTitle(e.target.value);
  };
  const bodyValue = (e) => {
    setNewBody(e.target.value);
  };

  return (
    <>
      <h1>TODO</h1>

      <div>
        <form onSubmit={addTodo}>
          <TodoInput
            label="제목"
            type="text"
            value={newTitle}
            onChange={titleValue}
          />
          <TodoInput
            label="내용"
            type="text"
            value={newBody}
            onChange={bodyValue}
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
