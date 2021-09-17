import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Review Mongoose" />
      <Todo text="Review React.js" />
      <Todo text="Learn sth else" />
    </div>
  );
}

export default App;
