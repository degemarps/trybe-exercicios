import './App.css';

function App() {

  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }

  const tasks = ['Estudar conteúdo', 'Fazer exercícios', 'Fazer projeto', 'Atualizar github', 'Abrir o PR'];

  return (
    <div className="App">
      {tasks.map(task => Task(task))}
    </div>
  );
}

export default App;
