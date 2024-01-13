function TodoItem(props) {
  return (
    <>
    <div className="todo_style">
      <li>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </button>
        {props.text}
      </li>
    </div>
    </>
  );
}

export default TodoItem;
