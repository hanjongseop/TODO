const TodoInput = ({ label, type, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input className="title" type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default TodoInput;
