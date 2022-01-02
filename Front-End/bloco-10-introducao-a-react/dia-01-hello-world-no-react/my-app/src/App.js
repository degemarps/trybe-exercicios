import './App.css';

function App() {

  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }

  const tasks = ['Estudar conteúdo', 'Fazer exercícios', 'Atualizar github', 'Abrir o PR', 'Finalizar o projeto'];

  return (
    <div className="App">
      {tasks.map(task => Task(task))}
    </div>
  );
}

export default App;
