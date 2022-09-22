import TodoItem from "../../components/todo/TodoItem";

function Todo() {
  return (
    <div>
      <h1>My Todos</h1>
      <TodoItem text="Learn React" />
      <TodoItem text="Master React" />
      <TodoItem text="Explore the full React course" />
    </div>
  );
}

export default Todo;
