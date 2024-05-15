// import { useState } from "react";
// import "./App.css";

// function App() {
//   const initialState = [
//     // {id: 0, title: “”, body: “”, isDone: false}
//   ];

//   const [users, setUsers] = useState(initialState);
//   const [newTitle, setNewTitle] = useState("");
//   const [newBody, setNewBody] = useState("");

//   const addUser = (e) => {
//     e.preventDefault();

//     if (!newTitle || !newBody) {
//       alert("제목과 내용을 입력해주세요.");
//       return;
//     }

//     setUsers([
//       ...users,{id: Date.now(), title: newTitle, body: newBody, btn: false },
//     ]);
//   };

//   const removeUser = (id) => {
//     const updatedUser = users.filter((user) => user.id !== id);
//     setUsers(updatedUser);
//   };

//   const toggleDone = (id) => {
//     const updatedUsers = users.map((user) =>
//       user.id === id ? { ...user, isDone: !user.isDone } : user
//     );
//     setUsers(updatedUsers);
//   };

//   const workingUsers = users.filter((user) => !user.isDone);

//   const doneUsers = users.filter((user) => user.isDone);

//   return (
//     <>
//       <h1>TODO</h1>
//       <div>
//         <form onSubmit={addUser}>
//           제목
//           <input
//             // style={{ color: btn ? "#ffffff" : "#000000" }}
//             className="title"
//             type="text"
//             // placeholder="제목"
//             value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//           />
//           내용{" "}
//           <input
//             // style={{ color: btn ? "#ffffff" : "#000000" }}
//             className="v"
//             type="text"
//             // placeholder="내용"
//             value={newBody}
//             onChange={(e) => setNewBody(e.target.value)}
//           />
//           <button type="submit">추가</button>
//         </form>
//         <h2>Working </h2>
//         <ul>
//           {workingUsers.map((user) => (
//             <li key={user.id}>
//               <span>
//                 {user.title}
//                 {user.body}
//               </span>
//               <button onClick={() => toggleDone(user.id)}>완료</button>
//               <button onClick={() => removeUser(user.id)}>삭제</button>
//             </li>
//           ))}
//         </ul>
//         <h2>Done</h2>
//         <ul>
//           {doneUsers.map((user) => (
//             <li key={user.id}>
//               <span>
//                 {user.title}
//                 {user.body}
//               </span>
//               <button onClick={() => toggleDone(user.id)}>취소</button>
//               <button onClick={() => removeUser(user.id)}>삭제</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }
// export default App;

// // <button className="cssAdd" onClick={() => switchHandler(user.id)}>
// //   {user.btn ? " 취소" : "완료"}{" "}
// // </button>;

// // const switchHandler = (id) => {
// //   setUsers(
// //     users.map((user) => (user.id === id ? { ...user, btn: !user.btn } : user))
// //   );
// // };

import { useState } from "react";
import "./App.css";

function App() {
  const initialState = []; // Assuming empty initial state

  const [todoList, setTodoList] = useState(initialState);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    if (!newTitle || !newBody) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

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
    const updatedTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodoList(updatedTodos);
  };

  const workingTodos = todoList.filter((todo) => !todo.isDone);

  const doneTodos = todoList.filter((todo) => todo.isDone);

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
          내용{" "}
          <input
            className="v"
            type="text"
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
          />
          <button type="submit">추가</button>
        </form>
        <h2>Working </h2>
        <ul>
          {workingTodos.map((todo) => (
            <li key={todo.id}>
              <span>
                {todo.title}
                {todo.body}
              </span>
              <button onClick={() => toggleDone(todo.id)}>완료</button>
              <button onClick={() => removeTodo(todo.id)}>삭제</button>
            </li>
          ))}
        </ul>
        <h2>Done</h2>
        <ul>
          {doneTodos.map((todo) => (
            <li key={todo.id}>
              <span>
                {todo.title}
                {todo.body}
              </span>
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
