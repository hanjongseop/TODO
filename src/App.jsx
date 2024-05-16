import { useState } from "react";
import "./App.css";

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
    setTodoList([
      ...todoList,
      { id: Date.now(), title: newTitle, body: newBody, isDone: false },
    ]);
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
            className="content"
            type="text"
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
          />
          <button className="add" type="submit">
            추가
          </button>
        </form>
        <h2>Working </h2>
        <ul>
          {workingTodo.map((todo) => (
            <li key={todo.id}>
              <div className="input-text">
                <p>제목:{todo.title}</p>
                <p>내용:{todo.body}</p>
              </div>

              <button onClick={() => toggleDone(todo.id)}>완료</button>
              <button onClick={() => removeTodo(todo.id)}>삭제</button>
            </li>
          ))}
        </ul>
        <h2>Done</h2>
        <ul>
          {doneTodo.map((todo) => (
            <li key={todo.id}>
              <div className="input-text">
                <p>제목:{todo.title}</p>
                <p>내용:{todo.body}</p>
              </div>

              <button onClick={() => toggleDone(todo.id)}>취소</button>
              <button onClick={() => removeTodo(todo.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
