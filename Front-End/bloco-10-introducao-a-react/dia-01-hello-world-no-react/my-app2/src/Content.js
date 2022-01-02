import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const listContents = conteudos.map((item) =>
  <li>
    Conteúdo é: {item.conteudo}<br></br>
    Status: {item.status}<br></br>
    Bloco: {item.bloco}<br></br>
  </li>
);

class Content extends React.Component {
  render() {
    return (
      <div>
        {listContents}
      </div>
    );
  }
}

export default Content;