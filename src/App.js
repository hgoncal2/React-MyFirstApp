// App.js

//importar um conteúdo e colocá-lo numa variável
import logo from './logo.svg';
//importar fiheiro css
import './App.css';


/* os Componentes podem ser:
    -classes
    -funções
*/
function App() {
  // todo o "componente" tem sempre que devolver alguma coisa...
  // e devolver sempre um único objeto
  return (
    <div className="App">{/** quando quero referir "CLASS" do CSS,
     * tenho que usar o termo "className,depois o "JSX" em runtime converte para "class"
    */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/** no REACT,acede-se ao valor de variáveis atráves de {} */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Olá mundo (2ª vez)</h1>
      <footer className='App-footer'>
        &copy; app@DW
      </footer>
    </div>
  );
}

//só se consegue aceder ao conteúdo do componente,se ele for "exportado"
export default App;
