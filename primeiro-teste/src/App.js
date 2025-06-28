import logo from './logo.svg';
import './App.css';

function App() {
  var nome = "Anderson Vanin"

  const url = 'https://placehold.co/150'

  function somar(a,b){
    return a+b
  }

  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Meu Primeiro App React</p>
      <p>O nome do prof é: {nome}</p>
      <p>Soma {somar(1,2)}</p>
      <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
