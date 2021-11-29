import './App.css';
import Card from './components/Card';
import './components/Titulo'
import Titulo from './components/Titulo';
import Imagem from './components/Imagem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Projeto React | Marcela Ismael</p>
        <Titulo text="O que eu sempre escuto 🎶" />
        <Card/>
        <Imagem/>
      </header>
    </div>
  );
}

export default App;