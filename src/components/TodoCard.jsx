const TodoCard = ({ todos, toggleDone, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div className="input-text">
            <p>제목: {todo.title}</p>
            <p>내용: {todo.body}</p>
          </div>
          <button onClick={() => toggleDone(todo.id)}>
            {/* todo.isDone  = ture면 취소  false면 완료 */}
            {todo.isDone ? "취소" : "완료"}
          </button>
          <button onClick={() => removeTodo(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoCard;
