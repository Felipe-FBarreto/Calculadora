import React from 'react';
import { Btn } from './Btn';
import './style/style.scss';
import { Tela } from './Tela';

function App() {
  const [valorTela, setValorTela] = React.useState('');
  const [resultado, setResultado] = React.useState(0);
  // FUNÇOES

  const addDigito = (digito) => {
    setValorTela(valorTela + digito);
  };
  const limpar = () => {
    setValorTela('');
    setResultado(0);
  };
  const apagarDigito = () => {
    let apagar = valorTela;
    const apagarTela = apagar.substring(0, valorTela.length - 1);
    setValorTela(apagarTela);
  };
  const somar = () => {
    let total = valorTela;
    let totalFinal = eval(total);
    setResultado(totalFinal);
  };

  return (
    <div className="container">
      <h1 className="title">Calculadora em React</h1>

      <section className="calculadora">
        <Tela valor={valorTela} res={resultado} />
        <Btn digito="AC" className="btn" onClick={limpar} />
        <Btn digito="C" className="btn" onClick={apagarDigito} />
        <Btn digito="/" className="btn" onClick={() => addDigito('/')} />
        <Btn digito="*" className="btn" onClick={() => addDigito('*')} />
        <Btn digito="7" className="btn" onClick={() => addDigito('7')} />
        <Btn digito="8" className="btn" onClick={() => addDigito('8')} />
        <Btn digito="9" className="btn" onClick={() => addDigito('9')} />
        <Btn digito="-" className="btn" onClick={() => addDigito('-')} />
        <Btn digito="4" className="btn" onClick={() => addDigito('4')} />
        <Btn digito="5" className="btn" onClick={() => addDigito('5')} />
        <Btn digito="6" className="btn" onClick={() => addDigito('6')} />
        <Btn digito="+" className="btn" onClick={() => addDigito('+')} />
        <Btn digito="1" className="btn" onClick={() => addDigito('1')} />
        <Btn digito="2" className="btn" onClick={() => addDigito('2')} />
        <Btn digito="3" className="btn" onClick={() => addDigito('3')} />
        <Btn digito="0" className="btn-zero" onClick={() => addDigito('0')} />
        <Btn digito="." className="btn" onClick={() => addDigito('.')} />
        <Btn digito="=" className="btn-igual" onClick={somar} />
      </section>
    </div>
  );
}

export default App;
