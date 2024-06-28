import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';

function App() {

  const [ colaboradores, setColaboradores ] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}/>
        {colaboradores.map((colaborador, index) => (
          <div key={index}>
            <h2>{colaborador.nome}</h2>
            <p>{colaborador.contato}</p>
            <p>{colaborador.email}</p>
            <p>{colaborador.assunto}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
