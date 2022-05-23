//  index.js

/*
Este é o PRIMEIRO ficheiro a ser lido pelo React
*/

/* os ficheiros do React começam pelos "includes"/"imports"
   a inclusão de Bibliotecas ou de Componentes
*/

//inclusão de bibliotecas para o React funcionar
import React from 'react';
import ReactDOM from 'react-dom/client';
//inclusão de CSS
import './index.css';
//inclusão do Componente inicial
import App from './App';
//inclusão de ferramentas de relatórios (em modo de desenvolvimento)
import reportWebVitals from './reportWebVitals';

//código a ser executado pelo ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>{/* este parâmetro (StrictMode) só atua em desenvolvimento
                        identificar potenciais problemas na construção da app
                    */}
    <App /> {/** Componente a ser executado */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
