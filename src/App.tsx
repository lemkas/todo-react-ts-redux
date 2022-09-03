import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Input />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
