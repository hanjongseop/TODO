const TodoCard = ({ status, todos, toggleDone, removeTodo }) => {
  return (
    <div>
      <h2>{status}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="input-text">
              <p>제목: {todo.title}</p>
              <p>내용: {todo.body}</p>
            </div>
            <button onClick={() => toggleDone(todo.id)}>
              {/* todo.isDone  = todo.isDone이면 취소  todo.isDone아니면 완료 */}
              {todo.isDone ? "취소" : "완료"}
            </button>
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoCard;
